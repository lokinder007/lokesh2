import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
   
       
return (
    <>
    
        <div className="notfound" id="notfount">
            <div className="notfound-404">
                <h1 style={{ fontSize: 50 }}>404</h1>
            </div>
            <h2 style={{ fontSize: 30, color:'blue' }}>We are sorry, page not found!</h2>
            <p style={{ fontSize: 20 }} className="mb-5">
                The page you are looking for might have been
                removed or is temporarily unavailable.
            </p>
            <NavLink className="btn " to="/"> Back To Homepage</NavLink>
        </div>


        
    </>
)
}

export default Errorpage
