import React from 'react';

export default class ReactWindowResizeListener extends React.Component {

	constructor() {
		super();
		this.handleResize = this.handleResize.bind(this);
		this.state = {
			style: {
				display: 'none',
				visibility: 'hidden'
			}
		}
	}

	componentDidMount() {

		if( typeof window !== 'undefined' ) {
			window.addEventListener('resize', this.handleResize, false);
		}

	}

	componentWillUnmount() {
		window.removeListener('resize', this.handleResize, false);
	}

	handleResize() {
		if( typeof this.props.onResize !== 'undefined')
			this.props.onResize();
	}

	render() {
		return (
			<div style={this.state.style}></div>
		)
	}
	
}
