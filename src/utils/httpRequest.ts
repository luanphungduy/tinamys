import axios, { AxiosInstance } from 'axios';

const httpRequest: AxiosInstance = axios.create({
    baseURL: 'http://172.16.10.14:3000/api/v1/',
    // baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (path: string, options: object = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export const post = async (path: string, body: object = {}, options: object = {}) => {
    const response = await httpRequest.post(path, body, options);
    return response.data;
};

export default httpRequest;
