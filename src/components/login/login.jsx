import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className='login-container'>
        <form action="">
            <h2>Login</h2>
           <div className="input-group">
           <label htmlFor="username">Username:</label>
           <input type="text" name="username" placeholder="Username" />
           </div>
            <div className="input-group">
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/register">Register</a></p>
        </form>
    </div>
  )
}
