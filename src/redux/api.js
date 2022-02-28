import axios from "axios";


export const createUserapi = async (user) =>
await axios.post('http://localhost:5000/users/',user);


export const loaduserapi = async () =>
await axios.get('http://localhost:5000/users');


export const deleteuserapi = async (userid) =>
await axios.delete(`http://localhost:5000/users/${userid}`);


export const updateuserapi = async (userid,userInfo) =>
await axios.put(`http://localhost:5000/users/${userid}`,userInfo);