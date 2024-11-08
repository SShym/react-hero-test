import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import { thunk } from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { reducers } from './redux/reducers';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);
