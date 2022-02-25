import axios from "axios";

export const loaduserapi = async () =>
await axios.get('http://localhost:5000/users');