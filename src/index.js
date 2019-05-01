import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './system/rootReducer';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

