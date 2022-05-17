import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header'
import Login from './Components/Login'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'
import Post from './Components/Post'
import Registration from './Components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Header />
      <div className='body'>
        <Switch>
          <Route path='/posts'>
            <Post />
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
