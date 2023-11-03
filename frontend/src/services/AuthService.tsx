/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";

// const API_BASE_URL = process.env.API_BASE_URL

// type SignupProps = {
//     name: string;
//     email: string;
//     password: string;
// };


// export class AuthService {
//     signup = (payload: SignupProps): Promise<any> => {
//         return new Promise<any>((resolve, reject) => {
//             axios
//                 .post(`http://localhost:5000/api/auth/signup`, payload)
//                 .then((response) => {
//                     resolve(response);
//                 })
//                 .catch((error) => reject(error));
//         });
//     };

// }

import axios from 'axios';

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base API URL
    headers: { 
        'Content-Type': 'application/json'
    },
});

export const Signup = async (data = {}, config = {}) => {
    const url = '/api/auth/signup';
    try {
        const response = await axiosInstance.post(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const Login = async (data = {}, config = {}) => {
    const url = '/api/auth/login'
    try {
        const response = await axiosInstance.post(url, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};


