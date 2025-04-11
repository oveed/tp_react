import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/register/register'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Contact from './components/contact/contact'

function App() {
    
  return (
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
  )
}

export default App
