import React from 'react'

import './modal.css'

function Modal( {closeModal} ) {
    
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={()=> closeModal(false)}> X </button>
            <div className='title'>
                <h1>There is an error</h1>
            </div>
            <div className='body'>
                <p>Must enter an input in search bar</p>
            </div>
            <div className='footer'>
                <button onClick={()=> closeModal(false)}>Cancel</button>
               
            </div>
        </div>
    </div>
  )
}

export default Modal