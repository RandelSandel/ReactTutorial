import React from 'react';
import TaskList from './TaskList.js';

var TaskApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            task: ''
        };
    },

    onChange: function(e) {
        var task = e.target.value;

        this.setState({ task });
    },

    addTask: function(e) {
        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: ''
        });

        e.preventDefault(); // the default for a form is to submit so we prevent that
    },

    render: function() {
        return (
            <div>
                <h1>My Tasks</h1>

                <TaskList items={this.state.items} />

                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add Task</button>
                </form>
            </div>
        );
    }

});

export default TaskApp;