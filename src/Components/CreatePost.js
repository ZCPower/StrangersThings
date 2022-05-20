import React, { useState, useEffect } from 'react'
import './CreatePost.css'

//Allow user to leave a description, title, price, willing to deliver, location, 
// and more!   


export default function CreatePost(props) {

    const { username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, token, setToken } = props


    return (
        <div className='newPost'>
            <form className='createPost'>
                <h1 className='regh1'>Add new listing!</h1>
                <label>Title</label>
                <input
                    name='title'
                    required
                />
                <label >Description</label>
                <textarea
                    name='description'
                //lock this so it's unmovable.
                />
                <label >Price</label>
                <input
                    name='Price'
                    required
                />
                <label >Location</label>
                <input
                    name='location'
                    required
                />
                <label >Willing to Deliver?</label>
                <input
                    name='delivery'
                    type='checkbox' />
                <button>Add Post</button>
            </form>
        </div>
    )
}