import React from 'react';
import { Link } from 'react-router-dom'


//need to add router to this section so that the user can go between each section of the app. 
export default function Header() {
    //add a terinary that changes the display here. if user is logged in, the first to don't show and only Account and Logout are displayed.
    //if user is loggedout/ unregistered display the first two only
    //upon clicking account give option to logout? display username and option to change password?
    return (
        <header>
            <h1>Stranger's Things</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link to='/logout'>Logout</Link>
                    </li>
                    <li>
                        <Link to='/createpost'>Add New Post</Link>
                    </li>
                    {/* <li>Login</li>
                    
                    <li>Register</li>
                    <li>Account</li>
                    <li>Logout</li> */}
                </ul>
            </nav>
        </header >
    )
}