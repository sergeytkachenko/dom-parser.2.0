import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import Iframe from 'react-iframe';

export default class Center extends React.Component {

	constructor() {
		super();
		this.state = {
			frameUrl: 'http://'
		};
	}

	handleChange(event) {
		let url = `http://localhost:3000/?url=${event.target.value}`;
		this.setState({url: url});
		this.setState({frameUrl: event.target.value});
	}

	onMouseOver(event) {
		console.log(event.target, event.clientX, event.clientY);
	}

	render() {
		return <div className="main-wrap">
					<MuiThemeProvider>
						<Card>
							<CardHeader className="enter-url">
								<MuiThemeProvider>
									<TextField 
										value={this.state.frameUrl}
										onChange={this.handleChange.bind(this)}
										fullWidth={true}
										hintText="Enter site url">
									</TextField>
						        </MuiThemeProvider>
							</CardHeader>
						    <CardText className="iframe-wrap" onMouseOver={this.onMouseOver.bind(this)}>
						   		<iframe src={this.state.url} />
						    </CardText>
				  		</Card>
					</MuiThemeProvider>
				</div>
	}
}