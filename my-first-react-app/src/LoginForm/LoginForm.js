import React, {Component} from 'react';
import Input from '../Input/Input';
import './LoginForm.sass';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            passwordHidden: true,
            username: '',
            password: ''
        }
    }

    changeInput(type, value) {
        switch (type) {
            case 'EMAIL':
                this.setState({username : value});
                this.props.onUpdateEmail(value);
                break;
            case 'PASSWORD' :
                this.setState({password : value});
                this.props.onUpdatePassword(value);
                break;
        }
    }


    render() {
        return (
            <div className={"LoginForm"}>
            
                <Input 
                    title={'Email'}
                    value={this.state.username}
                    handleChange={(username) => this.changeInput('EMAIL', username)}
                />
                
                <Input 
                    title={'Password'} 
                    value={this.state.password}
                    secure={this.state.passwordHidden}
                    handleChange={(password) => this.changeInput('PASSWORD', password)}
                >
                    <button 
                        style={{fontSize:'2em'}}
                        onClick={() => this.setState({passwordHidden: !this.state.passwordHidden})}
                    >👁</button>
                    
                </Input>
                
                <button>Se connecter</button>
            </div>
        );
    }
}

export default LoginForm;