import React from 'react';
import { useHistory } from 'react-router';
import { MdChevronLeft } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import IconButton from '../IconButton/IconButton';

const Header = () => {
	const history = useHistory();
	return (
		<div className="container__header row col-lg-12">
			<div className="row col-lg-6">
				<IconButton
					handleClick={() => history.goBack()}
					icon={<MdChevronLeft className="icon__button" fontSize="2em" />}
				/>
			</div>
			<div className="row col-lg-6">
				<IconButton
					handleClick={() => history.push('/')}
					icon={<MdClose className="icon__button" fontSize="1.75em" />}
				/>
			</div>
		</div>
	);
};

export default Header;
