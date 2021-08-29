import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ id: 1, txt: "First task" }, { id: 2, txt: "Second task" }, { id: 3, txt: "Third task" }]

        }


    }

    handleClick = (task) => {
        // console.log(this.state.currTask);

        // this.state.tasks.push({id:this.state.tasks.length+1,txt:this.state.currTask})
        //this.state.currTask='';

        let nta = [...this.state.tasks, { id: this.state.tasks.length + 1, txt: task }]

        this.setState({
            tasks: nta

        })

    }

    onDelete = (id) => {
        let nta = this.state.tasks.filter(obj => {
            return obj.id != id    //returns all other objects then the object whose id is passed to this function
        })
        this.setState({
            tasks: nta    //state change
        })
    }

    render() {
        return (
            <>
                <InputComponent handleClick={this.handleClick} />
                <TaskList tasks={this.state.tasks} onDelete={this.onDelete} />


            </>
        )
    }
}









