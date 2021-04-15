import React from 'react'
import Blogposts from '../../Components/blogposts';
import Sidebar from '../../Components/sidebar';


import './style.css';

const Post=(props)=>{
    console.log(props)
    return(
        <section className="container">
                 <Blogposts {...props}/>
                 <Sidebar/>
                   
        </section>
    )
}

export default Post;
