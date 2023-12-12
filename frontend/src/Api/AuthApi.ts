import axios from "axios"
const url = import.meta.env.BASE_URL as string;

export const onLogin = (username: string, password: string) => {
    console.log(url);
    return axios.post(`http://localhost:5000/user/login`, {
        username,
        password,
    });
};
