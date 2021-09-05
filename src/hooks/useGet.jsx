import { useState, useEffect } from 'react';

export default function useGet(getter, params) {
	const [state, setState] = useState();
	const fetch = async () => {
		setState(await getter(params));
	};
	useEffect(() => {
		if (state === undefined) {
			fetch();
		}
	}, [params]);
	return state;
}
