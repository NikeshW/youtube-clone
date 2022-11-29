const URL = process.env.REACT_APP_BASE_URL;
const KEY = process.env.REACT_APP_YT_KEY;


const fetchVideos = (query, setVideos,setSearchBar,setOpenModal) => {
  if (!query) {
    setOpenModal(true)
    return null;
    
  } else {
    return fetch(
      `${URL}/search?part=snippet&maxResults=24&q=${query}&key=${KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.items.length === 0){
          setOpenModal(true)
        } else {
        setVideos(data.items);
        setSearchBar("")
        }
        
      })
      .catch(error => {
        
        console.log(error)
        setOpenModal(true)
      });
  }
  
};
export { fetchVideos };
