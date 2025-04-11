import React from 'react'
import "./style.css"
export default function Contact() {
    return (
        <div className="contact-container">
            {/* <form action="">
            <h2>Contact Us</h2>
           <div className="group">
           <label htmlFor="name">Name</label>
           <input type="text" name="name" id="name" placeholder='Enter your name' required />
           </div>
           <div className="group">
           <label htmlFor="email">Subject</label>
           <input type="subject" name="subject" id="subject" placeholder='Enter your subject' required />
           </div>
           <div className="group">
           <label htmlFor="message">Message</label>
           <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required></textarea>
           </div>
            <button type="submit">Submit</button>
        </form> */}
            <form action="" className="contact-form">
                <h2>Contact Us</h2>
                <div class="double-input">
                    <input type="text" name="first_name" placeholder="First name" required />
                    <input type="text" name="last_name" placeholder="Last name" required />
                </div>
                <input type="email" name="email" placeholder="Email address" class="single-input" required />
                <textarea name="message" placeholder="Message" class="single-input" required></textarea>
                <button type="submit" class="btn">Submit</button>
            </form>
        </div>
    )
}
