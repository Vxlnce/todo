import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component<{}, {userName: string, todoItems: Array<{action: string, done: boolean}>, newItemText: string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            userName: "Adam",
            todoItems: [
                {action: "Buy Flowers", done: false},
                {action: "Get Shoes", done: false},
                {action: "Collect Tickets", done: true},
                {action: "Call Joe", done: false},
            ],
            newItemText: "",
        }
    }

    updateNewTextValue = (event: any) => {
        this.setState({newItemText: event.target.Value});
    }

    createNewTodo = () => {
        if (!this.state.todoItems.find(item => item.action === this.state.newItemText)){
            this.setState({todoItems: [...this.state.todoItems, {action: this.state.newItemText, done: false}], newItemText: ""})
        }
    }

    changeStateData = () => {
        this.setState({userName: this.state.userName === "Adam"? "Bob" : "Adam"})
    }

    render = () =>
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    { this.state.userName }'s To Do List ({this.state.todoItems.filter(t=>!t.done).length} items to do)
                </h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue}/>
                        <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
                    </div>
                </div>
                <button className="btn btn-primary mt-1" onClick={this.changeStateData}>Change</button>
            </div>
}

export default App;
