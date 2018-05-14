import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IPApp from './IPApp';

var destination = document.querySelector('#container');

ReactDOM.render(
	<div>
		<IPApp/>
	</div>,
	destination
)