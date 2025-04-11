import React from 'react'
import "./register.css"
export default function Register() {
  return (
    <div className='login-container'>
        <form action="">
            <h2>Register</h2>
           <div className="input-container">
           <div className="input-group">
           <label htmlFor="username">Username:</label>
           <input type="text" name="username" placeholder="Username" />
           </div>
           <div className="input-group">
           <label htmlFor="username">Email:</label>
           <input type="email" name="email" placeholder="Email" />
           </div>
            <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
            </div>
           </div>
            <button type="submit">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
  )
}
