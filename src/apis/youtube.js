import Axios from 'axios';

const KEY = 'AIzaSyCaZw7mO_-jZR6nqAm8N2-bv02ogODTulA';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});