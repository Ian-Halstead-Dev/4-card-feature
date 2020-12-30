import React from 'react';

const Card = (props) => {
	return (
		<div className={`${props.class} card`}>
			<h1>{props.title}</h1>
			<p>{props.sentence}</p>
			<img src={props.imgSrc} alt={props.imgAlt} />
		</div>
	);
};

export default Card;
