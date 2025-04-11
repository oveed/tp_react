import React, { useState } from 'react'
import "./style.css"
export default function Navbar() {
    
    return (
       <header>
            <div className="logo">
                <img src="./logo.png" alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/art">Art</a></li>
                    <li><a href="/cinema">Cinema</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/login">Logout</a></li>
                </ul>
            </nav>
            <div className="search">
            <input type="text" placeholder='Search' />
            </div>
       </header>
    )
}
