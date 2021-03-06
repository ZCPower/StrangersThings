import React, { useState, useEffect } from 'react';
import { login } from '../api/api';
import './Login.css'
import { Link } from 'react-router-dom'

export default function LoginScreen(props) {
    const { username, setUsername, password, setPassword, token, setToken, loggedIn, setLoggedIn, history } = props

    function handleUsernameChange(event) {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    return (
        <>
            <form className='loginForm'
                onSubmit={(e) => {
                    e.preventDefault();
                    login(username, password, token, setToken);
                    setLoggedIn(true)
                    console.log(token)
                    window.localStorage.setItem("token", 5)
                }
                }>
                <h1 className='regh1'>Login to view postings!</h1>

                <input
                    onChange={handleUsernameChange}
                    required
                    name='username'
                    minLength='6'
                    placeholder='Username'
                />
                <input
                    onChange={handlePasswordChange}
                    required
                    type='password'
                    name='password'
                    minLength='8'
                    placeholder='Password'
                />
                <button

                >Log In</button>
                <p>Don't have an account? <Link to='register'>Register here!</Link></p>
            </form>
        </>

    )
}