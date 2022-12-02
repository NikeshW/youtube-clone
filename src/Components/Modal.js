import React from "react";

import "./modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="body">
          <p>Must enter an input in search bar</p>
        </div>
       
        <div className="title">
          <img
            src="https://media2.giphy.com/media/Ll22OhMLAlVDb8UQWe/giphy.gif"
            alt="error"
            
          />
        </div>
        <div className="footer">
          <button className="cancelbtn" onClick={() => closeModal(false)}>Cancel</button>
        </div>
        
      </div>
    </div>
  );
}

export default Modal;
