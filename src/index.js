import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header'
import Main from './Components/Main'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Main />
  </>
);
