import React from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Addarticle from './pages/Addarticle'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import ArticleScreen from './pages/ArticleScreen'
import CartScreen from './pages/CartScreen'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addarticle" element={<Addarticle />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
