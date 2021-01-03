import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID p2rx8ptSIlmyFxB4c1X9S3IpTuNFwOeXQGQl8PFKBDE",
      }
})
