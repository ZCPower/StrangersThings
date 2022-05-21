import React, { useState, useEffect } from 'react'
import { createPost } from '../api/api'
import './CreatePost.css'

//Allow user to leave a description, title, price, willing to deliver, location, 
// and more!   


export default function CreatePost(props) {

    const { token, username } = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('')
    const [delivery, setDelivery] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        createPost(title, description, price, location, delivery, token)
        console.log('Im creating a new post and my token is: ' + token)
        console.log('The title is: ' + title)
        console.log('The description is: ' + description)
        console.log('The price is: ' + price)
        console.log('The location is: ' + location)
        console.log('Willing to deliver? ' + delivery)
        console.log('THe token is ' + token)
    }

    return (
        <div className='newPost'>
            <form className='createPost'
                onSubmit={handleSubmit}>
                <h1 className='regh1'>Add new listing, {username}!</h1>
                <label>Title</label>
                <input
                    name='title'
                    required
                    value={title}
                    onChange={event => (setTitle(event.target.value))}
                />
                <label >Description</label>
                <textarea
                    name='description'
                    required
                    value={description}
                    onChange={event => (setDescription(event.target.value))}
                //lock this so it's unmovable.
                />
                <label >Price</label>
                <input
                    name='Price'
                    required
                    value={price}
                    onChange={event => (setPrice(event.target.value))}
                />
                <label >Location</label>
                <input
                    name='location'
                    required
                    value={location}
                    onChange={event => (setLocation(event.target.value))}
                />
                <label >Willing to Deliver?</label>
                <input
                    vlaue={delivery}
                    name='delivery'
                    type='checkbox'

                    onChange={event => setDelivery(!delivery)}
                />
                <button>Add Post</button>
            </form>
        </div>
    )
}