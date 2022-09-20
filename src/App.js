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

			<h1>Hello React!</h1>
			<button onClick={incrementer}>Increment</button>
			<h2>{counter}</h2>
		</div>
	);
}

export default App;
