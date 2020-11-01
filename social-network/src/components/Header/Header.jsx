import React from 'react';
import classes from './Header.module.css'


const Header = () => {
	return(
		
		<header className={classes.header}>

		<a className = {classes.button_logo} href = '#s'><img src="../img/Logo.png" alt="Logo"/></a>
			<div className = {classes.search_box}>
				<div className = {classes.table}>
					<table className = {classes.box}>
						<tr>
							<td>
								<input className = {classes.search} type="text" placeholder = 'Search user'/>
							</td>
							<td>
								<a href = '#s'><img className = {classes.img_search} src='../img/Search.png' alt=""/></a>
							</td>
						</tr>
					</table>
				</div>
			</div>    

				<a className= {classes.link_image} href = '#s'><img src="../img/Home.png" alt="" className = {classes.link}/></a>
				<a className= {classes.link_image} href = '#s'><img src="../img/Message.png" alt="" className = {classes.link}/></a>
				<a className= {classes.link_image} href = '#s'><img src="../img/Friends.png" alt="" className = {classes.link}/></a>
				<a className= {classes.link_image} href = '#s'><img src="../img/Music.png" alt="" className = {classes.link}/></a>
			
			<div className={classes.user_profile_mini}>
			<a className = {classes.user_link_mini} href = '#s'><img src="./img/User-logo-minipng.png" alt="user logo" className = {classes.user_img_mini}/>Legonella</a>
			</div>
		</header>
	)
}

export default Header;