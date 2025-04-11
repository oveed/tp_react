import React, { useState } from 'react'
import "./home.css"
import { useParams } from 'react-router-dom';
export default function Home() {
    const { category } = useParams(); 
const blogs = [
    { id: 1, title: 'Cinema1', description: 'React Router is a powerful library for building single-page applications.', image: "Barbaros Barbershop.png", category: "cinema" },
    { id: 2, title: 'Art', description: 'Vite is a modern build tool that improves developer experience.', image: "Event Management Platform.png", category: "art" },
    { id: 3, title: 'Cinema2', description: 'TypeScript is a superset of JavaScript that adds static type checking.', image: "Keyan Agency.png", category: "cinema" },
]
    const [posts, setPosts] = useState(blogs);
    return (
        <div className="home">
        <div className="posts">
            {posts
                .filter((post) => post.category === category || category === undefined)
                .map((post) => (
                    <div className="post-card" key={post.id}>
                        <img src={post.image} alt="" />
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </div>
                ))}
        </div>
    </div>
    
    )
}


