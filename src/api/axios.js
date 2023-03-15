import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500'
});

export const urlGenres =`https://localhost:7030/api/User`;