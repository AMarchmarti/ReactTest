import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
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
				<>
					<h3>
						<b>{data.title}</b>
					</h3>
					<p>{data.typeText}</p>
					<Button
						type="button"
						handleClick={() => history.push(`/${data.type.hotel}`)}
						label={data.hotelGuestButton}
					/>
					<Button
						type="button"
						handleClick={() => history.push(`/${data.type.agency}`)}
						label={data.agencyTraveButton}
					/>
					<Link url="/" label={data.linkRegister} />
				</>
			)}
		</>
	);
};

export default Home;
