var React = require('react');


import GistBox from './components/gistbox/GistBox.js';

React.render(<GistBox />, document.querySelector('#app'));



import HelloWorld from './components/helloworld/HelloWorld.js';

React.render(<HelloWorld />, document.getElementById('hello'));



import Avatar from './components/avatar/Avatar.js';

React.render(<Avatar path="http://bit.ly/1NABbkf" />, document.getElementById('avatar'));



import TaskApp from './components/taskapp/TaskApp.js';

React.render(<TaskApp />, document.getElementById('tasklist'));



import ExampleTime from './components/exampletime/ExampleTime.js';

setInterval(function() {
  React.render(<ExampleTime date={new Date()} />, document.getElementById('exampletime'));
}, 500);


// createElement example
var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
React.render(root, document.getElementById('elementexample'));


/* var props = {};
props.foo = x;
props.bar = y;
var component = <Component {...props} />;
React.render(component.props, document.getElementById('elementexample')); */


import LikeButton from './components/likebutton/LikeButton.js';

React.render(<LikeButton />,document.getElementById('likebutton'));



import AvatarProfile from './components/avatarprofile/AvatarProfile';

React.render(<AvatarProfile username="pwh" />, document.getElementById('avatarprofile'));


