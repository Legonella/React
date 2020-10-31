import React from 'react'
import classes from '../Navbar/Navbar.module.css'

const Navbar = () => {
	return(
		<nav className = {classes.nav}>
		<div><a href="#s" className = {classes.link}>Profile</a></div>
		<div><a href="#s" className = {classes.link}>Messages</a></div>
		<div><a href="#s" className = {classes.link}>News</a></div>
		<div><a href="#s" className = {classes.link}>Music</a></div>
		<div><a href="#s" className = {classes.link}>Settings</a></div>
		</nav>
	)
}

export default Navbar;