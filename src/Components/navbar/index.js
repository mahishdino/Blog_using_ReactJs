import React, { useState } from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'

const Navbar=(props)=>{

    const [search, setSearch]=useState(false);

    const submit=(e)=>{
e.preventDefault();
alert('searched');
    }
    const opensearch=()=>{
        setSearch(true);
    }
    const searchClass=search ?'searchinput active': 'searchinput';
    return(
<div className="navbar">
    <ul className="navbarMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Posts">Posts</NavLink>
        <NavLink to="/Contact-us">Categories</NavLink>
        <NavLink to="/">Strories</NavLink>



    </ul>
    <div className="Search">
        <form onSubmit={submit}>
        <input type = "text" className={searchClass} placeholder="Search"/>
        <img onClick ={opensearch} className="searchicon" src={require('../../assets/icons/search.png').default} alt= "Search"/>
        </form>
    </div>
</div>
    )
}
export default Navbar;