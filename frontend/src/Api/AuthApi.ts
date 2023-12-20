import axios from "axios"
const url = import.meta.env.BASE_URL as string;

export const onLogin = (email: string, password: string) => {
    console.log(url);
    return axios.post(`http://localhost:5000/user/login`, {
        email,
        password,
    });
};

export const onRegister = (username: string, password: string, email: string) => {
    return axios.post(`http://localhost:5000/user/register`, {
        username,
        email,
        password
    });
};
