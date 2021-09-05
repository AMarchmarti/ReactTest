import React from 'react';
import { useHistory } from 'react-router';
import IconButton from '../IconButton/IconButton';

const Header = () => {
	const history = useHistory();
	return (
		<div>
			<IconButton handleClick={() => history.goBack()} icon="bi bi-arrow-left" />
			<IconButton handleClick={() => history.push('/')} icon="bi bi-x" />
		</div>
	);
};

export default Header;
