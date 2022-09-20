import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Video from './components/Video';

function App() {
	// Write Javascript HEREE
	const [counter, setCounter] = useState(0);
	const [toggle, setToggle] = useState(false);

	const incrementer = () => {
		setCounter(counter + 1);
	};

	const toggler = () => {
		setToggle((prev) => !prev);
	};

	return (
		<div className="App">
			{/* <h1 className={toggle ? 'active' : ''}>Helllo React!</h1>
			<h2>Counter {counter}</h2>
			<button onClick={incrementer}>Click</button>
			<button onClick={toggler}>Toggle</button> */}

			<Nav toggle={toggle} />
			<Video num={counter} setToggle={toggler} />
		</div>
	);
}

export default App;
