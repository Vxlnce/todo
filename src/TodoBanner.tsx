import React, {Component} from "react";

export class TodoBanner extends Component<any, any>{
    render = () =>
        <h4 className="bg-primary text-white text-center p-2"> {this.props.name}'s To-Do List ({this.props.tasks.filter((t: { done: boolean; })=>!t.done).length} items to do)</h4>
}