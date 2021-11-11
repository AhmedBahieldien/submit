import React from 'react';
import Image from 'react-bootstrap/Image';

function Avatar(props) {
	return (
		<Image
			src={props.avatarURL}
			roundedCircle
			width="30"
			height="30"
			className={props.className}
			alt="user avatar"
		/>
	);
}

export default Avatar;