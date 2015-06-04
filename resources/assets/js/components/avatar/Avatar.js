import React from 'react';



var Avatar = React.createClass({

	render: function() {

		return ( 

			<div>

				<img src={this.props.path} />

			</div>

		);
	}
});


export default Avatar;