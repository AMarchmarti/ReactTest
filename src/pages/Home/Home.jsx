import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Link from '../../components/Link/Link';
import Title from '../../components/Title/Title';
import { getMainData } from '../../service/main.service';

const Home = () => {
	const history = useHistory();
	const [data, setData] = useState();
	const fetch = async () => {
		setData(await getMainData());
	};
	useEffect(() => {
		if (data === undefined) {
			fetch();
		}
	}, []);
	return (
		<>
			{data && (
				<Container>
					<Title title={data.title} />
					<p>{data.typeText}</p>
					<Button
						type="button"
						variant="outlined"
						handleClick={() => history.push(`/${data.type.hotel}`)}
						label={data.hotelGuestButton}
					/>
					<Button
						type="button"
						variant="outlined"
						handleClick={() => history.push(`/${data.type.agency}`)}
						label={data.agencyTraveButton}
					/>
					<Link url="/" label={data.linkRegister} />
				</Container>
			)}
		</>
	);
};

export default Home;
