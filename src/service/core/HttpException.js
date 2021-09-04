class HttpException extends Error {
	constructor(error) {
		super(error.error);
		this.code = error.status || '';
		this.description = error.description || '';
	}

	get code() {
		return this.code;
	}

	get description() {
		return this.description;
	}
}

export default HttpException;
