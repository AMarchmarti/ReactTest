import React from 'react';
import { useHistory } from 'react-router';
import { MdChevronLeft } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import IconButton from '../IconButton/IconButton';
import Grid from '../Grid/Grid';

const Header = () => {
	const history = useHistory();
	return (
		<Grid size="lg" number={12} direction="row" className="container__header">
			<Grid size="lg" number={6} direction="row">
				<IconButton
					handleClick={() => history.goBack()}
					icon={<MdChevronLeft className="icon__button" fontSize="2em" />}
				/>
			</Grid>
			<Grid size="lg" number={6} direction="row" className="header__close">
				<IconButton
					handleClick={() => history.push('/')}
					icon={<MdClose className="icon__button" fontSize="1.75em" />}
				/>
			</Grid>
		</Grid>
	);
};

export default Header;
