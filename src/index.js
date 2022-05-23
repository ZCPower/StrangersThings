import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import Login from './Components/Login'
import CreatePost from './Components/CreatePost'
import Post from './Components/Post'
import Registration from './Components/Register';
import Account from './Components/Account';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { fetchPosts } from './api/api';
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
  const [messages, setMessages] = useState([]);
  const [myPostings, setMyPostings] = useState([]);

  return (
    <>
      <Router>
        <Header token={token} />
        <Redirect to='/register' />
        <div className='body'>
          <Switch>
            <Route token={token} path='/posts'>
              <Post username={username} posts={posts} token={token} />
            </Route>
            <Route path='/login'>
              {!token ? <Login username={username} setUsername={setUsername} token={token} setToken={setToken} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} /> : <Post username={username} posts={posts} token={token} />}
            </Route>
            <Route exactpath='/' path={'/register'}>
              {!token ? <Registration username={username} setUsername={setUsername} token={token} setToken={setToken} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} /> : <Post username={username} posts={posts} token={token} />}
            </Route>
            <Route path='/createpost'>
              <CreatePost username={username} token={token} />
            </Route>
            <Route path='/account'>
              <Account username={username} setToken={setToken} token={token} setUsername={setUsername} />
            </Route>
            <Route path='/messages'>
              <Messages username={username} token={token} messages={messages} setMessages={setMessages} />
            </Route>
            <Route path='/myposts'>
              <MyPosts username={username} token={token} myPostings={myPostings} setMyPostings={setMyPostings} />
            </Route>
          </Switch>
        </div>

      </Router>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))