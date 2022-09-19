import React from 'react';
import './App.css';

// Import components
import Nav from './components/Nav';
import Tweets from './components/Tweets';

function App() {
	return (
		<div className="App">
			<h1>Helllo React!</h1>
			<div className="home">
				<Nav />
				<Tweets />
			</div>
		</div>
	);
}

export default App;
