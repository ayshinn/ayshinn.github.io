// import React from 'react';
// import ReactDOM from 'react-dom';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;
let description;

// if/else statement begins here:
if (coinToss() === 'heads') {
  	img = (
    	//<img src={pics.kitty} />
        <img src="images/sunset.jpg" width="320" height="200"/>
    );
    description = (<p>Sometimes I am a sunset...</p>);
} else {
    img = (
    	<img src="images/walk.jpg" width="320" height="200"/>
    );
    description = (<p>Sometimes I am a dune pic...</p>);
}

ReactDOM.render(
	description,
    document.getElementById('yoboi')
);

ReactDOM.render(
	img,
    document.getElementById('yoboi')
);
