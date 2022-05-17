import React, { useState, useEffect } from 'react'
import { fetchPosts } from '../api/api';

export default function Post() {
    //add functionality that checks whether currentUser is the author of a post, and allow them to click a modify post button. 
    const [posts, setPosts] = useState({})

    useEffect(() => {
        fetchPosts()
            .then((posts) => setPosts(posts)

            )

            .catch(error => console.error(error))
    }, [])

    const cards = posts.map((post) => {
        return (

            <div className='postCard'>

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
        <div className='cardContainer'>
            {cards}
        </div>
    )
}


