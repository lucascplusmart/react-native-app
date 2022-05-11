import axios from 'axios';

const api = axios.create({
  baseURL: 'api.hgbrasil.com/weather'
});

export default api;