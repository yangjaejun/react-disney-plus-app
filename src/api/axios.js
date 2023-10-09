import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '5dd27a49624d82416e76245aeff314bc',
    language: 'ko-KR',
  },
});

export default instance;
