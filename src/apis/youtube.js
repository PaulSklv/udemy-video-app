import axios from 'axios';

const KEY = 'AIzaSyCBrv_lxcj8r5V-dSpjtoQ02xHT6YuDPIE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
