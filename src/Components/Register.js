import React from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/api'
import './Registration.css'


export default function Registration(props) {
    const { username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, token, setToken } = props

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value)
    }

    return (
        <>


            <form className='registrationForm'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (password === confirmPassword) {
                        register(username, password, token, setToken)
                        localStorage.setItem("token", token)
                    } else {
                        alert('Those passwords dont match')
                    }
                }
                }>
                <h1 className='regh1'>Create an account!</h1>
                <input
                    placeholder='Username'
                    minLength={6}
                    maxLength={16}
                    onChange={handleUsernameChange}
                    required
                ></input>
                <input
                    type='password'
                    placeholder='Password'
                    minLength={8}
                    onChange={handlePasswordChange}
                    required
                ></input>
                <input
                    type='password'
                    placeholder='Confirm Password'
                    minLength={8}
                    onChange={handleConfirmPasswordChange}
                    required
                ></input>

                <button
                >Register</button>
                <p>Already have an account? <Link to='/login'>Log In!</Link></p>
            </form>
        </>
    )
}
