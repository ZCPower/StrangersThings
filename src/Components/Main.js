import React from 'react'
import { FaSearch } from 'react-icons/fa';
// import { fetchPosts } from '../api/api';
import './Main.css'
import Post from './Post'
// import CreatePost from './CreatePost'

export default function Main() {
    // const [posts, setPosts] = useState({})

    // useEffect(() => {
    //     fetchPosts()
    //         .then((posts) => setPosts(posts)

    //         )

    //         .catch(error => console.error(error))
    // }, [])

    // console.log(posts)
    return (
        <main>
            <form>
                <input
                    placeholder='Search'></input>
                <button> <FaSearch /></button>
                <Post />
            </form>
        </main>
    )
}