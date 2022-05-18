import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/api'
import './Registration.css'

export default function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [token, setToken] = useState('')

    function handleUsernameChange(event) {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }

    function handleConfirmPasswordChange(event) {
        // console.log(event.target.value)
        setConfirmPassword(event.target.value)
    }
    console.log('Username is ' + username)
    console.log('Password is ' + password)
    console.log('Confirmation is ' + confirmPassword)
    return (
        <>


            <form className='registrationForm'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (password === confirmPassword) {
                        register(username, password, setToken())
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