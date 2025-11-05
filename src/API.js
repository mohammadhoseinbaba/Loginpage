import axios from 'axios'
const api = axios.create(
    {
        baseURL: "http://localhost:3001", //path of fake db json for learning and test 
        headers: { "Content-Type": "application/json" },
    }
)
export default api;