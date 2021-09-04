import { post } from './http.service';

export const addUser = async (user) => {
	try {
		await post('http://localhost:3001/users', user);
	} catch (e) {
		console.error({
			error: e.message.value,
			status: e.code,
		});
		throw e;
	}
};
