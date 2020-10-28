import React from 'react'
import './App.css';


const App = () => {
  return (
		<div className = 'app-wrapper'>
			<header className = 'header'>
				<img alt = ""  src = 'https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'/>
			</header>
			<nav className = "nav">
			<div><a href="#s" className = "link">Profile</a></div>
			<div><a href="#s" className = "link">Messages</a></div>
			<div><a href="#s" className = "link">News</a></div>
			<div><a href="#s" className = "link">Music</a></div>
			<div><a href="#s" className = "link">Settings</a></div>
			</nav>
			<div className = 'content'>
			<div>
				<img alt = "" src = "https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg"></img>
				</div>
				<div>
					avatar + description
				</div>
				<div>
					 My post
					 <div>
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
		</div>
  );
}

export default App;
