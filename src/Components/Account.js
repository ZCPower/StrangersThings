import React from 'react'
import './Account.css'
import { Link } from 'react-router-dom'

export default function Account(props) {
    const { username, setToken, token, setUsername } = props
    return (
        <>
            <div className='accountContainer'>
                {token ? <h3 className='accountHeading'>Hello, {username}</h3> : <h3 className='accountHeading'>Please Login!</h3>}

                {token ? <h4 className='accountLink'><Link to='/myposts'>View Your Posts</Link></h4> : null}
                {token ? <h4 className='accountLink'><Link to='/messages'>View Your Messages</Link></h4> : null}
                < Link to='/login' onClick={() => {
                    setToken('');
                    setUsername('')



                }}><h4 className='accountLink'>{token ? 'Log Out' : 'Log In'}</h4></Link>
            </div>
        </>
    )
}
