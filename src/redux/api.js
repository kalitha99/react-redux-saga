import axios from "axios";

export const createUserapi = async (user) =>
await axios.post('http://localhost:5000/users/',user);


export const loaduserapi = async () =>
await axios.get('http://localhost:5000/users');