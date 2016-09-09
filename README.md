# React Window Resize Listener

This React component can be used to execute some tasks when the window resize event is triggered.


## Demo & Examples

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-window-resize-listener is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-window-resize-listener.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install window-resize-listener-react --save
```


## Usage

You can use it in multiple components if you want to listen to window resize event in several components and execute some task based on the event.

```
import React from 'react';
import ReactWindowResizeListener from 'window-resize-listener-react';

export default class MyComponentName extends React.Component {

	constructor() {
		super();
		this.resizeHandler = this.resizeHandler.bind(this);
	}

	resizeHandler(event) {
		// Do Something
	}

	render() {
		return(
			<div>
				<ReactWindowResizeListener onResize={this.resizeHandler} />
			</div>
		)
	}

}
```

Props associated with the component [`onResize`] can be used to pass a callback function which can be utilized to execute some task based on window resize event.


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).


