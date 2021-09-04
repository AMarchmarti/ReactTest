import HttpException from './core/HttpException';
import HttpMethod from './core/HttpMethod';
import { HTTP_SUCCESS_STATUS, ResponseStatus } from './core/ResponseStatus';
const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Cache-control': 'no-cache',
	Pragma: 'no-cache',
};

const createResponse = async (response) => {
	const responseStatus = response.status;
	if (!HTTP_SUCCESS_STATUS.includes(responseStatus)) {
		const responseData = (await response.json()) || { error: null };
		const errorResponse = await parseError(responseData);
		throw new HttpException(errorResponse);
	}

	return ResponseStatus.NO_CONTENT === responseStatus ? await response.text() : await response.json();
};

const fetch = (path, body, method) =>
	new Promise((resolve, reject) => {
		const sendInformation = body
			? {
					method: method,
					body: JSON.stringify(body),
			  }
			: {};
		window
			.fetch(path, {
				headers: {
					...headers,
				},
				...sendInformation,
			})
			.then((response) => {
				return createResponse(response);
			})
			.then(resolve)
			.catch(reject);
	});

export const get = (path) => fetch(path);
export const post = (path, body) => fetch(path, body, HttpMethod.POST);
export const put = (path, body) => fetch(path, body, HttpMethod.PUT);
