import React from 'react';
import './Header.css'

const header =()=>{

    

    return(
        <div className="header">
            <div className="navbar">
                <div className="container is-fluid">
                <div className="navbar-start has-text-centered">
                    <div className="navbar-item"><a href="#coffee">Coffee</a></div>
                    <div className="navbar-item"><a href="#menu">Menu</a></div>
                </div>
                    <div className="logo has-text-centered">
                        <h1 className="is-size-4-desktop is-size-5-touch">COFFEE SHOP</h1>
                    </div>
                <div className="navbar-end has-text-centered">
                <div className="navbar-item"><a href="#about">About</a></div>
                <div className="navbar-item"><a href="#contact">Contact</a></div>

                </div>
                </div>
            </div> 
        </div>
    )
}
export default header