import React from 'react'
import './Account.css'
import { Link } from 'react-router-dom'

export default function Account(props) {
    const { username, setLoggedIn, setToken, loggedIn, token, setUsername } = props
    return (
        <>
            <div className='accountContainer'>
                {token ? <h3 className='accountHeading'>Hello, {username}</h3> : <h3 className='accountHeading'>Please Login!</h3>}

                {token ? <h4 className='accountLink'>View Your Posts</h4> : null}
                {token ? <h4 className='accountLink'>Messages</h4> : null}
                < Link onClick={() => {
                    setToken('');
                    setLoggedIn(false)
                    setUsername('')



                }}><h4 className='accountLink'>Log Out</h4></Link>
            </div>
        </>
    )
}

// {
//     <Link onClick={() => {
//         setToken('');
//         setLoggedIn(false)
//         setUsername('')
//         console.log(loggedIn)
//         console.log(token)
//     }}><h4 className='accountLink'>Log Out</h4></Link>
// }