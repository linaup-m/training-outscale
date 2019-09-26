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


    render() {
        return (
            <div className={"LoginForm"}>
            
                <Input 
                    title={'Email'}
                    value={this.state.username}
                    handleChange={(username) => this.setState({username})}
                />
                
                <Input 
                    title={'Password'} 
                    value={this.state.password}
                    secure={this.state.passwordHidden}
                    handleChange={(password) => this.setState({password})}
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