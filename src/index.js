import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import Login from './Components/Login'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'
import Post from './Components/Post'
import Registration from './Components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { fetchPosts } from './api/api';



function App() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    fetchPosts(setPosts)
      .then((response) => setPosts(response.data.posts))
      .catch(error => console.error(error))

  }, [])



  return (
    <>
      <Router>
        <Header />
        <div className='body'>
          <Switch>
            <Route path='/posts'>
              <Post posts={posts} />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Registration />
            </Route>
            <Route path='/createpost'>
              <CreatePost />
            </Route>

          </Switch>
        </div>

      </Router>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))