import React from 'react';

var TaskList = React.createClass({

    render: function() {
/*         var displayTask = (task) => <li>{task}</li>; */
		
		var displayTask = function(task) {
			
			return <li>{task}</li>
		};

        return (
            <ul>
                { this.props.items.map(displayTask) } 
            </ul>
        );
    }

});


export default TaskList;


/* for each of our items we will map over it and call 
the displayTask function and the value or body or text 
of the task will be passed through and we return a list items
which gets added in the braces of the ul. */