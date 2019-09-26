import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginContainer from './containers/LoginContainer';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer';

import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const initialState = {
    user: {
        isLoading: false,
        login: null, 
        password: null,
    }
}

const store = createStore(
    rootReducer, 
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const Page404 = () => {
    return <h1>Page not found</h1>
}
const RoutedApp = (props) => {

    return(
        <Provider store={store}>
            
            <Router>
                <span>
                    <NavLink exact to={'/login'} activeClassName={'link-active'}>Login</NavLink>
                </span>
                
                <Switch>
                    <Route path={`/login/:username`} component={LoginContainer}/>
                    <Route path={`/login`} component={LoginContainer}/>
                    <Route component={Page404}/>
                </Switch>
                
            </Router>
        </Provider>
    )


}




ReactDOM.render(<RoutedApp />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
