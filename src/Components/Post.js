import React, { useState, useEffect } from 'react'
import { fetchPosts } from '../api/api';
import './Post.css'

export default function Post(props) {
    //add functionality that checks whether currentUser is the author of a post, and allow them to click a modify post button. 

    const { posts, token, username } = props

    const cards = posts.map((post) => {
        return (
            <div className='post'>

                <h2>{post.title}</h2>
                <h3>Author: {post.author.username}</h3>
                <p className='price'>Price : {post.price}</p>
                <p className='location'>Location: {post.location}</p>
                <p className='description'>{post.description}</p>
                {token ? <div>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
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


