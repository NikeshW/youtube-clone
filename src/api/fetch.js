const URL = process.env.REACT_APP_BASE_URL;
const KEY = process.env.REACT_APP_YT_KEY

const fetchVideos = (query, setVideos) => {
    return fetch(`${URL}/search?part=snippet&maxResults=25&q=${query}&key=${KEY}`)
    .then((res) => res.json()).then((data) => {
      setVideos(data.items)
    })
  }
  export {fetchVideos}