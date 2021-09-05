import React from 'react';
import Grid from '../Grid/Grid';

const Title = ({ title }) => {
	return (
		<Grid size="lg" number={12} direction="column">
			<h3>{title}</h3>
		</Grid>
	);
};

export default Title;
