var React = require('react');
var ReactDOM = require('react-dom');
var ReactWindowResizeListener = require('react-window-resize-listener');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactWindowResizeListener />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
