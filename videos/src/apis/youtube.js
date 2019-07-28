import axios from 'axios';

const KEY = 'AIzaSyDiATQe1TPJPjsWV9W7Y5VbYoWlhCOlS7Q';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
