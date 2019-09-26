import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startRequest, changePassword, changeEmail} from '../actions/users.actions'

import App from '../App/App';

class LoginContainer extends Component {
    render() {
        return <App {...this.props}/>;
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEmail: (email) => dispatch(changeEmail(email)),
        changePassword: (password) => dispatch(changePassword(password)),
        startRequest: (loading) => dispatch(startRequest(loading))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

