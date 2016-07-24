import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class Right extends React.Component {
	render() {
		return <div className="right-sidebar">
			<MuiThemeProvider>
				  <Tabs>
				    <Tab label="Item One" >
				      <div>
				        <p>
				          This is an example tab.
				        </p>
				      </div>
				    </Tab>
				    <Tab label="Item Two" >
				      <div>
				        <p>
				          This is another example tab.
				        </p>
				      </div>
				    </Tab>	
				  </Tabs>
			</MuiThemeProvider>
		</div>
	}
}