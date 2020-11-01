import React from 'react'
import classes from '../Profile/Profile.module.css'

const Profile = () => {
	return(
		<div className = {classes.content}>
			<div>
				<img alt = "" src = "https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg"></img>
				</div>
				<div className = "item">
					avatar + description
				</div>
				<div className = "item">
					 My post
					 <div className = "item">
						 new post
					 </div>
					 <div>
						 <div>
							 post 1
						 </div>
						 <div>
							 post 2
						 </div>
					 </div>
				</div>
			</div>
	)
}

export default Profile;