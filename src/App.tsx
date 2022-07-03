import React, { Component } from 'react';
import {TodoBanner} from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";
import {VisibilityControl} from "./VisibilityControl";
export default class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userName: "Charlie",
            todoItems: [
                { action: "Buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false }
            ],
            showCompleted: true
        }
    }

    updateNewTextValue = (event: any) => {
        this.setState({ newItemText: event.target.value });
    }

    createNewTodo = (task: any) => {
        if (!this.state.todoItems.find((item: any) => item.action === task)) {
            this.setState({
                todoItems: [...this.state.todoItems, { action: task, done: false }]
            }, () => localStorage.setItem("todos", JSON.stringify(this.state)));
        }
    }

    toggleTodo = (todo: any) => this.setState({ todoItems:
            this.state.todoItems.map((item: any) => item.action === todo.action
                ? { ...item, done: !item.done } : item) });

    todoTableRows = (doneValue: any) => this.state.todoItems.filter((item: any) => item.done === doneValue)
        .map((item: any) => <TodoRow key={ item.action } item={ item } callback={ this.toggleTodo } />)

    componentDidMount = () => {
        let data = localStorage.getItem("todos");
        this.setState(data != null ? JSON.parse(data) :
            {
               userName: "Charlie",
               todoItems: [
                   { action: "Buy Flowers", done: false },
                   { action: "Get Shoes", done: false },
                   { action: "Collect Tickets", done: true },
                   { action: "Call Joe", done: false }],
                showCompleted: true
            });
    }

    render = () =>
        <div>
            <TodoBanner name={ this.state.userName } tasks={this.state.todoItems } />
            <div className="container-fluid">
                <TodoCreator callback={ this.createNewTodo } />
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr><th>Description</th><th>Done</th></tr>
                    </thead>
                    <tbody>{ this.todoTableRows(false) }</tbody>
                </table>
                <div className="bg-secondary text-white text-center p-2">
                    <VisibilityControl description="Completed Tasks" isChecked={this.state.showCompleted}
                                       callback={(checked: any) => this.setState({showCompleted: checked})}/>
                </div>
                {
                    this.state.showCompleted &&
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr><th>Description</th><th>Done</th></tr>
                        </thead>
                        <tbody>{this.todoTableRows(true)}</tbody>
                    </table>
                }
            </div>
        </div>
}