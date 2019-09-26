import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Input.sass';

/*
function Input() {
    return (
        <input...
    );
}
*/

const Input = (props) => {
    return (
        <div className="Input">
                <h3 style={{
                        fontFamily: 'sans-serif'
                    }}>{props.title}</h3>
                <div className="Input__Fields">
                    <input 
                        type={props.secure ? "password" : "email"}
                        style={{
                            backgroundColor: '#f4f4f4',
                            height: 40,
                            width: '80%',
                            borderRadius: 3,
                            borderColor: '#b0acb4',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            margin: '2em'
                        }}
                        value={props.value}
                        onChange={(e) => props.handleChange(e.target.value)}
                        />
                    
                    {props.children}
                </div>
                
            </div>
    )
    
}

Input.propTypes = {
    secure: PropTypes.bool,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}


export default Input