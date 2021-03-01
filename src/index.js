import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from "redux";
import {Provider} from 'react-redux'
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)
const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
