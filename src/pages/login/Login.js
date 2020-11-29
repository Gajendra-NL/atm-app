import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authenticateUser } from '../../redux/actions/authActions';

import './Login.css';

const users = {
    user1: {
        userName: 'user1',
        password: '12345',
        name: 'User One',
        accountBalance: 20000,
    },
    user2: {
        userName: 'user2',
        password: '12345',
        name: 'User Two',
        accountBalance: 25000,
    }
};

const Login = (props) => {

    const [userName, setUsername] = useState({ username: null})
    const [password, setPassword] = useState({ password: null})


    const onClickLoginHandler = () => {
        if (users[userName]) {
            if (users[userName].password === password) {
                props.authenticateUser(true, users[userName]);
            } else {
                alert('Invalid Password!')
            }
        }
        else {
            alert('Invalid Username!')
        }
    }

    if (props.isAuthenticated) {
        // console.log(props);
        return <Redirect to='/' />
    }

    const onInputChangeHandler = (event, inputField) => {
        if (inputField === 'username') {
            setUsername(event.target.value)
        } else if (inputField === 'password') {
            setPassword(event.target.value)
        }
    }

    return (
        <div>
            <form onSubmit={onClickLoginHandler}>
                <label className={'Label'}>Username</label>
                <input type='text'
                    id='username'
                    placeholder='Enter Username'
                    required
                    onChange={(event) => onInputChangeHandler(event, 'username')} ></input>
                <label className={'Label'}>Password </label>
                <input type='text'
                    id='password'
                    placeholder='Enter Password'
                    required
                    onChange={(event) => onInputChangeHandler(event, 'password')} ></input>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, { authenticateUser })(Login);
