import React from 'react';
import { Link } from 'react-router-dom'


//need to add router to this section so that the user can go between each section of the app. 
export default function Header(props) {
    const { token } = props

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