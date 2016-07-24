import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {
	render() {
		return <header>
			<MuiThemeProvider>
				<AppBar
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				  />
			</MuiThemeProvider>
		</header>
	}
}