import axios from 'axios';

export const reimbClient = axios.create({
    baseURL: 'http://localhost:8080',
    //baseURL: 'http://kevinwagenheimproject1api-env.eba-pfzxxg4c.us-east-1.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    }
});