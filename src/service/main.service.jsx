import { get } from './http.service';

export const getMainData = async () => {
	let data;
	try {
		const response = await get('http://localhost:3001/main');
		data = response;
	} catch (e) {
		console.log('e :>> ', e);
	}

	return data;
};

export const getInformationCompleteData = async () => {
	let information;
	try {
		const response = await get('http://localhost:3001/information');
		information = response;
	} catch (e) {
		console.log('e :>> ', e);
	}

	return information;
};
