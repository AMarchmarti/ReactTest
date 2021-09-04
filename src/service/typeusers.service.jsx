import { get } from './http.service';

export const getTypeUsers = async (param) => {
	let type;
	try {
		const response = await get(`http://localhost:3001/typeusers/${param}`);
		type = response;
	} catch (e) {
		console.log('e :>> ', e);
	}

	return type;
};
