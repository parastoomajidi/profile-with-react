import React, { useState } from "react"
import User from '../Asset/User.png';
import '../Styles/MenuProfile.css';


export const MenuProfile =() =>{ 
    const [isOpen, setIsOpen] =useState(1);
    const HandelToggle=()=>{
        // setIsOpen(isOpen + 2)
        setIsOpen(!isOpen)
    }
    console.log(isOpen)
    return(
        <div className="profile-menu-container">
            <div className="avatar" onClick={HandelToggle}>
                <img src={User} alt="userImage"/>
            </div>
            {isOpen && (
                <div className="menu-dropdown">
                <div className="menu-header">
                    <strong>menu</strong>
                    <small>parastooMajidi@gmail.com</small>
                </div>
                <ul>
                    <li>Profile</li>
                    <li>Setting</li>
                    <li>Log out</li>
                </ul>
            </div>
            )}
            

        </div>
    )
}