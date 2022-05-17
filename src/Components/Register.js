import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/api'
import './Registration.css'

export default function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsernameChange(event) {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        // console.log(event.target.value)
        setPassword(event.target.value)
    }
    console.log('Username is ' + username)
    console.log('Password is ' + password)
    return (
        <>


            <form className='registrationForm'
                onSubmit={(e) => {
                    e.preventDefault()
                    register(username, password)
                    console.log('Welcome ' + username)
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

                <button
                >Register</button>
                <p>Already have an account? <Link to='/login'>Log In!</Link></p>
            </form>
        </>
    )
}