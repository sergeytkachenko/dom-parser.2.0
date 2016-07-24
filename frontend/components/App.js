import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header/Header';
import Left from './left/Left';
import Right from './right/Right';
import Center from './center/Center';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
	render() {
		return  <div>
					<Header />
					<div  className="app">
						<Left />
						<Center />
						<Right />
					</div>		
				</div>
	}
}