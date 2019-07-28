import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c6c201f7c7f4d4ff0362d18fc58160428bb5adede0cdabbf1753172aa0ca228d'
  }
});
