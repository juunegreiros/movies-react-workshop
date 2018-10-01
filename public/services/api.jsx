import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 10000,
});

export const key = '41b0dacac11ce51d0d8085035a3a5e73';
