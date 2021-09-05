import React from 'react';
import { MdClose } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import Grid from '../../components/Grid/Grid';
import IconButton from '../../components/IconButton/IconButton';
import Title from '../../components/Title/Title';
import useGet from '../../hooks/useGet';
import { getInformationCompleteData } from '../../service/main.service';
import Button from '../../components/Button/Button';

const Complete = () => {
	const information = useGet(getInformationCompleteData);
	return (
		<>
			{information && (
				<Grid lg="lg" sizeLg={12} direction="column" className="container">
					<Grid lg="lg" sizeLg={12} direction="column" className="complete__header">
						<Grid lg="lg" sizeLg={12} direction="column" className="icon__button__complete">
							<IconButton handleClick={() => history.push('/')} icon={<MdClose fontSize="1.75em" />} />
						</Grid>
						<Grid lg="lg" sizeLg={12} direction="column" className="container">
							<Title title={information.title} />
						</Grid>
					</Grid>
					<Grid lg="lg" sizeLg={12} direction="column" className="complete__check">
						<BsCheckCircle fontSize="3em" className="complete__check__icon" />
					</Grid>
					<Grid lg="lg" sizeLg={12} direction="column" className="complete__description">
						{information.description}
					</Grid>
					<Button
						type="button"
						variant="contained"
						handleClick={() => history.push('/')}
						label={information.btn}
					/>
				</Grid>
			)}
		</>
	);
};

export default Complete;
