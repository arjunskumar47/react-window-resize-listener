import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_STYLE = {
	display: 'none',
	visibility: 'hidden'
};

class ReactWindowResizeListener extends React.Component {

	constructor() {
		super();
		
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {

		if( typeof window !== 'undefined' ) {
			window.addEventListener('resize', this.handleResize, false);
		}

	}

	componentWillUnmount() {
		if( typeof window !== 'undefined' ) {
			window.removeEventListener('resize', this.handleResize, false);
		}
	}

	handleResize(event) {
		if( typeof this.props.onResize !== 'undefined' ) {
			this.props.onResize(event);
		}
	}

	render() {
		return (
			<div style={DEFAULT_STYLE} />
		);
	}
	
}

ReactWindowResizeListener.PropTypes = {
	onResize: PropTypes.func
};

export default ReactWindowResizeListener;
