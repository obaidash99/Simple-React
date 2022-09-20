import React, { useState } from 'react';

const Video = (props) => {
	return (
		<section>
			<h1>Video {props.num}</h1>
			<button onClick={props.setToggle}>Toggle</button>
		</section>
	);
};

export default Video;
