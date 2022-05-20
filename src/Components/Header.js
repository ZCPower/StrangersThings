import React from 'react';
import { Link } from 'react-router-dom'


//need to add router to this section so that the user can go between each section of the app. 
export default function Header(props) {
    const { username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, token, setToken, loggedIn } = props
    //add a terinary that changes the display here. if user is logged in, the first to don't show and only Account and Logout are displayed.
    //if user is loggedout/ unregistered display the first two only
    //upon clicking account give option to logout? display username and option to change password?
    console.log('On the header, I am logged in?: ' + loggedIn)
    console.log('My token is: ' + token)
    return (
        <header>
            <h1>Stranger's Things</h1>
            <nav>
                <ul>
                    {token ? null : <li>
                        <Link to='/login'>Login</Link></li>}


                    {token ? null : <li>
                        <Link to='/register'>Register</Link></li>}

                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                    {token ? <li>
                        <Link to='/createpost'>Add New Post</Link>
                    </li> : null}
                    {token ? <li>
                        <Link to='/account'>Account</Link>
                    </li> : null}

                </ul>
            </nav>
        </header >
    )
}