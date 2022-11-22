import { useState } from "react";
import { fetchVideos } from "../api/fetch";
import Modal from "./Modal";

const Search = ({ setVideos, videos,searchBar,setSearchBar,openModal,setOpenModal }) => {
 


  const handleTextChange = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setSearchBar(title);
  };

return (
    <>
      {openModal && <Modal closeModal={setOpenModal} />}
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
          onClick={() => fetchVideos(searchBar, setVideos, setSearchBar,setOpenModal)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
