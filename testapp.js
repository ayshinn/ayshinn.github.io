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
        <img src="images/sunset.jpg" />
    );
    description = (<p>Sometimes I'm a sunset...</p>);
} else {
    img = (
    	<img src="images/walk.jpg" />
    );
    description = (<p>Sometimes I'm a dune pic...</p>);
}
img = (<img width="200" height="200" />);

ReactDOM.render(
	description,
    document.getElementById('yoboi')
);

ReactDOM.render(
	img,
    document.getElementById('yoboi')
);
