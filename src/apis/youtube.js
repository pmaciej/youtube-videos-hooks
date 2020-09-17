import axios from 'axios';



const KEY = 'AIzaSyD-WI-nFllfcxqVKGv_7JaNM_eZuLg2M9o';
// key z duzej zeby bylo wiadomo ze mamy tego nie ruszac :P




export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY

  }
});


