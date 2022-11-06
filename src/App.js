import Login from './pages/login/login'
import Home from './pages/home/home'
import React from 'react'
import Register from './pages/register/register'
import PostsByCategoria from './pages/PostsByCategoria/PostsByCategoria'
import Post from './pages/post/post'
import User from './pages/profile/profile'
// import {GetUsuarios} from './components/api/Api'


import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      







      <BrowserRouter>

        <Routes>
        <Route element={<Home />} path="" />
        <Route element={<Login />} path="/Login" />
        <Route element={<Register />} path="/register"/>
        {/* <Route element={<GetUsuarios />} path="/api"/> */}
        <Route element={<PostsByCategoria />} path="/categoria/:id"/>
        <Route element={<Post />} path="/post/:id"/>
        <Route element={<User />} path="/profile/:id"/>
        {/* <Route element={<UserDetails />} path="/user"/> */}
        
          <Route path='*' element={<div><h1>Página não encontrada!!</h1>
          <img src="https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif" alt="" />
          </div>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
