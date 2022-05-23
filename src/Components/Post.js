import React from 'react'
import { removePost } from '../api/api';
import './Post.css'

export default function Post(props) {
    //add functionality that checks whether currentUser is the author of a post, and allow them to click a modify post button. 

    const { posts, token, username } = props

    async function deletePost(id, token) {
        removePost(id, token)
        console.log('Deleted post with id: ' + id)
    }

    const cards = posts.map((post) => {
        return (
            <div className='post'>

                <h2>{post.title}</h2>
                <h3>Author: {post.author.username}</h3>
                <p className='price'>Price : {post.price}</p>
                <p className='location'>Location: {post.location}</p>
                <p className='description'>{post.description}</p>
                {token ? <div className='buttonContainer'>
                    {username === post.author.username ? <button className='edit'>Edit</button> : <button className='messageButton'>Message</button>}
                    {username === post.author.username ? <button onClick={() => deletePost(post._id, token)} className='delete'>Delete</button> : null}
                </div> : null}
            </div>
        )
    })

    return (
        <div className='postContainer'>
            {token ? <h1 className='regh1'>Welcome, {username} </h1> : null}
            {cards}

        </div>
    )
}


