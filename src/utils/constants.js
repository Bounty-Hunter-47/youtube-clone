
// youtube-clone
// const API_KEY = "AIzaSyAk-fxw0C8KW9Wm0wVc_A-pHY9OcmEpNmQ"

// youtube-clone-2
const API_KEY = "AIzaSyA-rUM4cANCXVlDpul1IXxudM9Veq_pYC0"


export const GET_YOUTUBE_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + API_KEY

export const GET_VIDEO_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=QZ1rhSnk-B0&key=" + API_KEY;

export const GET_SUGGESTIONS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=" + API_KEY;

export const GET_COMMENTS = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&&key=" + API_KEY;