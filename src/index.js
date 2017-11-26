import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './components/Test';

import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<div>
			{/* Note: sample code snippet for routes */}
			<Route exact path='/' component={App} />
			<Route path='/test' component={Test} />
		</div>
	</BrowserRouter>,
document.getElementById('root'));
