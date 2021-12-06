import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
// import logo from "../images/pulse.gif";
import '../styles/Navbar.scss'
import LoginForm from "./Login";
import Modal from "./Modal";


export default function Navbar() {
// const pages = (pageName) => {
//     switch(pageName) {
//     case "aboutus":   return <Modal body='Screens' id='images'/>;
//     case "screens": return <Modal body='Contact Us' id='contactus'/>;
//     case "contactus":  return <Modal body='About Us' id='aboutus'/>;
//     default:  return <Modal body='Home' id='home'/>;
//     }
// }

    return (
        <div className="navbar bg-transparent fixed-top">
            <div className="logo"> <img src={logo} alt='logo' /> </div>
            <ul className="menu">
                <li><Link to='/' data-toggle="modal" data-target='#home' className="nav-link">Home</Link></li>
                <li><Link to='/' data-toggle="modal" data-target='#screens' className="nav-link">Screens</Link></li>
                <li><Link to='/' data-toggle="modal" data-target='#aboutus' className="nav-link">AboutUs</Link></li>
                <li><Link to='/' data-toggle="modal" data-target='#contactus' className="nav-link">Contact Us</Link></li>
            </ul>
            <LoginForm /> 
            
            <Modal body={<span>Home</span>} id='home'/>
            <Modal body={<span>Screenshot</span>} id='screens' />
            <Modal body={<span>About Us</span>} id='aboutus' />
            <Modal body={<span>Contact Us</span>} id='contactus' />
        </div>
    )
}
