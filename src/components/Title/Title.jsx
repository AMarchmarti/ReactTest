import React from 'react';
import Grid from '../Grid/Grid';

const Title = ({ title }) => {
	return (
		<Grid lg="lg" sizeLg={12} direction="column">
			<h3>{title}</h3>
		</Grid>
	);
};

export default Title;
