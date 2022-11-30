import axios from 'axios'

const baseURL = "http://localhost:8080/dating/cards";
const instance = axios.create({
    baseURL: baseURL
})

export default instance;
