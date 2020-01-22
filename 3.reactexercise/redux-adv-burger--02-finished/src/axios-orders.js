import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-d4260.firebaseio.com/'
});

export default instance;