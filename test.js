import http from 'k6/http';
import {check} from 'k6';

export default function() {
    	let response = http.get(`http://${__ENV.HOST}:${__ENV.PORT}`);
	const checkRes = check(response, {
			'portal': (r) => r.status === 200,
	});
	
};
