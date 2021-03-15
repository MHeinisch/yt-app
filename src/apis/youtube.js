import axios from 'axios';

const KEY = 'AIzaSyAryk1E1pSJ8HPutWVJUQG7Ub83-WSS8YU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});