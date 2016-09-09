import React from 'react';
import ReactDOM from 'react-dom';
import ReactWindowResizeListener from 'react-window-resize-listener';

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {
			ResizeData: {
				Height: 'Inital',
				Width: 'Initial'
			}
		};
		this.handleResize = this.handleResize.bind(this);
	}
	
	handleResize(e) {
		this.setState({
			ResizeData: {
				Height: e.currentTarget.innerHeight,
				Width: e.currentTarget.innerWidth
			}
		})
		
	}
	
	render () {
		return (
			<div>
				<p>Width : {this.state.ResizeData.Width}</p>
				<p>Height : {this.state.ResizeData.Height}</p>
				<ReactWindowResizeListener onResize={this.handleResize} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
