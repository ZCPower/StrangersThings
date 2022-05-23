import React, { useState } from 'react'
import { createPost } from '../api/api'
import './CreatePost.css'
import { useHistory } from 'react-router-dom'

export default function CreatePost(props) {

    const { token, username } = props
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('')
    const [delivery, setDelivery] = useState(false)

    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        createPost(title, description, price, location, delivery, token);
        history.push('/posts')
    }

    return (
        <div className='newPost'>
            <form className='createPost'
                onSubmit={handleSubmit}>
                <h1 className='regh1'>Add a new listing, {username}!</h1>
                <label>Title</label>
                <input
                    name='title'
                    required
                    value={title}
                    onChange={event => (setTitle(event.target.value))}
                />
                <label >Description</label>
                <input
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