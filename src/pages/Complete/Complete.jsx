import React from 'react';
import { MdClose } from 'react-icons/md';
import { BsCheckCircle } from 'react-icons/bs';
import Grid from '../../components/Grid/Grid';
import IconButton from '../../components/IconButton/IconButton';
import Title from '../../components/Title/Title';
import useGet from '../../hooks/useGet';
import { getInformationCompleteData } from '../../service/main.service';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router';

const Complete = () => {
	const history = useHistory();
	const information = useGet(getInformationCompleteData);
	return (
		<>
			{information && (
				<Grid size="lg" number={12} direction="column" className="container container__complete">
					<Grid size="lg" number={12} direction="column" className="complete__header">
						<Grid size="lg" number={12} direction="column" className="container__icon__button__complete">
							<IconButton
								className="icon__button__complete"
								handleClick={() => history.push('/')}
								icon={<MdClose fontSize="1.75em" fontVariant="bold" />}
							/>
						</Grid>
						<Grid size="lg" number={12} direction="column" className="container container__complete__title">
							<Title title={information.title} />
						</Grid>
					</Grid>
					<Grid size="lg" number={12} direction="column" className="complete__description">
						<Grid size="lg" number={12} direction="column" className="complete__check">
							<BsCheckCircle fontSize="3em" className="complete__check__icon" />
						</Grid>
						<Grid size="lg" number={12} direction="column">
							{information.description}
						</Grid>
						<Grid size="lg" number={12} direction="column" className="container__button__complete">
							<Button
								type="button"
								variant="contained"
								handleClick={() => history.push('/')}
								label={information.btn}
							/>
						</Grid>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Complete;
