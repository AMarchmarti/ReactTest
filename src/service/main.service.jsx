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
