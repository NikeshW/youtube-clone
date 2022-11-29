import { fetchVideos } from "../api/fetch";
import Modal from "./Modal";
import "./Search.css"
import {GoSearch} from 'react-icons/go'

const Search = ({ setVideos, videos,searchBar,setSearchBar,openModal,setOpenModal }) => {
 


  const handleTextChange = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setSearchBar(title);
  };
  
  const handleKeypress = e => {
  if (e.key === 'Enter') {
    fetchVideos(searchBar, setVideos, setSearchBar,setOpenModal)
  }
};

return (
    <>
      {openModal && <Modal closeModal={setOpenModal} />}
      <div className="searchbar">
        <label htmlFor="searchTitle">

          <input className="search_input"
          placeholder="Search.."
            type="text"
            value={searchBar}
            id="searchBar"
            onChange={handleTextChange}
            onKeyDown={handleKeypress}
          />
        </label>

        <button
          className="search-button"
          onClick={() => fetchVideos(searchBar, setVideos, setSearchBar,setOpenModal)}
        >
          <GoSearch style={{height:'30', width:'30'}} />
        </button>
      </div>
    </>
  );
};

export default Search;
