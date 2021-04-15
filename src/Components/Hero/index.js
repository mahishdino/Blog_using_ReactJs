import React from 'react'
import Logo from '../Logo'
import Card from '../UI/Cards'
import Navbar from '../navbar'


const Hero=(props)=>{
    return(
        <Card>
            <div style={{padding:'20px 0'}}>
            <Logo/>  
            
            </div>
            <Navbar/>
        </Card>
                 


    )
}
export default Hero;
