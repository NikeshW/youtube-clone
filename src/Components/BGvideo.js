import React from 'react'
import cityscape from "../Videobg/cityscape.mp4"
import "./BGvideo.css"

export default function BGvideo() {
  return (
    <div>
        <video loop autoPlay muted id='bg-video'>
            <source src={cityscape} type="video/mp4"/>
        </video>
    </div>
  )
}
