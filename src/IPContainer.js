import React, { Component } from 'react';

class IPContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="container">
				<span>Seu IP:</span>
				<span>{this.props.ip}</span>
			</div>
		)
	}
}

export default IPContainer;