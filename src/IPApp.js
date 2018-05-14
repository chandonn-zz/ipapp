import React, { Component } from 'react';
import IPContainer from './IPContainer';
import './IPApp.css';

var xhr;

class IPApp extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			ip: "loading ip..."
		}

		this.processRequest = this.processRequest.bind(this)
	}

	componentDidMount() {
		xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://ipinfo.io/json', true);
		xhr.send();

		// When the state of xhr changes, calls the function
		xhr.addEventListener('readystatechange', this.processRequest, false);
	}

	processRequest() {

		if (xhr.readyState === 4 && xhr.status === 200) {
			var response = JSON.parse(xhr.responseText);
			this.setState({
				ip: response.ip
			});
		}
	}

	render() {
		return(
			<div className="IPApp">
				<IPContainer ip={this.state.ip}/>
			</div>
		)
	}
}

export default IPApp;