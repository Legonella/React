import './App.css';


const App = () => {
  return (
		<div>
			<div><Header /></div>
			<div className = "App">
				<ul>
					<li>css</li>
					<li>html</li>
					<li>js</li>
					<li>react</li>
				</ul>
			</div>
		</div>
  );
}

const Header  = () => {
	return (<div>
	<a href = "#s">Hello</a>
	<a href = "#s">News</a>
	<a href  = "#s">Const</a>
	</div>
	);
}

export default App;
