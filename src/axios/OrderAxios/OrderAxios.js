import axios from 'axios';

const instance = axios.create({
	baseURL:'https://myburger-6d658.firebaseio.com/',
});

export default instance;