import React, {Component} from "react";

export class TodoCreator extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {newItemText: ""};
    }

    updateNewTextValue = (event: any) => {
        this.setState({newItemText: event.target.value});
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({newItemText: ""})
    }

    render = () =>
        <div className="my-1">
            <input className="form-control" value={this.state.newItemText} onChange={this.updateNewTextValue}/>
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
        </div>
}
