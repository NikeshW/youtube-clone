import { useState } from "react";
import { fetchVideos } from "../api/fetch";

const Search = ({ setVideos, videos }) => {
  const [searchBar, setSearchBar] = useState("");

  
  const handleTextChange = (e) => {
    e.preventDefault()
    const title = e.target.value;
      setSearchBar(title);
  };
  // const handleClick = () => {
  //   searchBar('') 
  // }
  // const clearSearchBar =(()=> {
  //  fetchVideos(searchBar, setVideos);
  //  handleClick()
   
  // })
  
  return (
    <div className="searchbar">
      <label htmlFor="searchTitle">
        Search Videos:
        <input
          type="text"
          value={searchBar}
          id="searchBar"
          onChange={handleTextChange}
        />
      </label>
     
      <button
        className="search-button"
        onClick={() => fetchVideos(searchBar, setVideos, setSearchBar)}

      >
        Search
      </button>
    
      
    </div>
  );
};

export default Search;
