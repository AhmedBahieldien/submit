import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';

import App from './App';
import rootReducer from './reducers';

import middleware from './middlewares';
//style
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Provider } from 'react-redux';
const store = createStore(rootReducer,  middleware);

ReactDOM.render(

	<Provider store={store}>
		<dev><App /></dev>
	</Provider>,
	document.getElementById('root')
	
);


