import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Layout from '../Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Comment from '../pages/Comment'
import Servise from '../pages/Servise'
import { Wrapper } from './style'
import { Route, Routes } from 'react-router-dom'

export default function Root() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='Comment' element={<Comment />} />
        <Route path='Servise' element={<Servise />} />
      </Route>
    </Routes>
  )
}
