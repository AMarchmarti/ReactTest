import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import Grid from '../../components/Grid/Grid';
import Link from '../../components/Link/Link';
import Title from '../../components/Title/Title';
import useGet from '../../hooks/useGet';
import { getMainData } from '../../service/main.service';

const Home = () => {
	const history = useHistory();
	const data = useGet(getMainData);
	return (
		<>
			{data && (
				<Grid lg="lg" sizeLg={12} direction="column" className="container container__home">
					<Title title={data.title} />
					<p>{data.typeText}</p>
					<Button
						type="button"
						variant="outlined"
						handleClick={() => history.push(`/register/${data.type.hotel}`)}
						label={data.hotelGuestButton}
					/>
					<Grid lg="lg" sizeLg={12} direction="column" className="margin__xs__top"></Grid>
					<Button
						type="button"
						variant="outlined"
						handleClick={() => history.push(`/register/${data.type.agency}`)}
						label={data.agencyTraveButton}
					/>
					<Grid lg="lg" sizeLg={12} direction="column" className="container__link">
						<Link handleClick={() => history.push(`/complete`)} label={data.linkRegister} />
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Home;
