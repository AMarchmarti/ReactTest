const ResponseStatus = {
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	SERVER_ERROR: 500,
};

const HTTP_SUCCESS_STATUS = [
	ResponseStatus.OK,
	ResponseStatus.CREATED,
	ResponseStatus.ACCEPTED,
	ResponseStatus.NO_CONTENT,
	ResponseStatus.SERVER_ERROR,
];

export { HTTP_SUCCESS_STATUS, ResponseStatus };