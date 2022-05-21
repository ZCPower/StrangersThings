import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import Login from './Components/Login'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'
import Post from './Components/Post'
import Registration from './Components/Register';
import Account from './Components/Account';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import { fetchPosts, createPost } from './api/api';
import Messages from './Components/Messages';
import MyPosts from './Components/MyPosts';



function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    fetchPosts(setPosts)
      .then((response) => setPosts(response.data.posts))
      .catch(error => console.error(error))

  }, [posts])



  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  let history = useHistory();

  // useEffect(() => {
  //   if (!token) history.push('/login')
  //   else history.push('/posts')
  // }, [])



  token ? console.log(token) : console.log('no token')
  // loggedIn ? console.log('You are logged in') : console.log('You are not logged in.')
  // username ? console.log('Hello ' + username) : console.log('I wish you were here.')
  return (
    <>
      <Router>
        <Header loggedIn={loggedIn} token={token} />
        <div className='body'>
          <Switch>
            <Route token={token} path='/posts'>
              <Post username={username} posts={posts} token={token} loggedIn={loggedIn} />
            </Route>
            <Route path='/login'>
              {!token ? <Login username={username} setUsername={setUsername} token={token} setToken={setToken} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Post username={username} posts={posts} token={token} loggedIn={loggedIn} />}
            </Route>
            <Route path='/register'>
              {!token ? <Registration username={username} setUsername={setUsername} token={token} setToken={setToken} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Post username={username} posts={posts} token={token} loggedIn={loggedIn} />}
            </Route>
            <Route path='/createpost'>
              <CreatePost username={username} token={token} loggedIn={loggedIn} />
            </Route>
            <Route path='/account'>
              <Account username={username} setToken={setToken} setLoggedIn={setLoggedIn} token={token} loggedIn={loggedIn} setUsername={setUsername} />
            </Route>
            <Route path='/messages'>
              <Messages username={username} token={token} loggedIn={loggedIn} />
            </Route>
            <Route path='/myposts'>
              <MyPosts username={username} token={token} loggedIn={loggedIn} />
            </Route>
          </Switch>
        </div>

      </Router>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))

//PRIORITIZE:
  // Unauthorized posts/authenticated X
  // login, register X
  //authorized posts/authenticated
      //BEARER TOKEN
  // routing X