import React, { useState, useEffect } from 'react'
import { fetchPosts } from '../api/api';
import './Post.css'

export default function Post(props) {
    //add functionality that checks whether currentUser is the author of a post, and allow them to click a modify post button. 


    const posts = props.posts

    const cards = posts.map((post) => {
        return (

            <div className='post'>

                <h2>{post.title}</h2>
                <h3>Author: {post.author.username}</h3>
                <h4>Price : {post.price}</h4>
                <p>Location: {post.location}</p>
                <p>{post.description}</p>
            </div>
        )
    })

    console.log(posts)

    return (
        <div className='postContainer'>
            {cards}
        </div>
    )
}


