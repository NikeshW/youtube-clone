import React from 'react'
import "./BGvideo.css"

export default function BGvideo({source}) {
  return (
    <div>
        <video loop autoPlay muted id='bg-video'>
            <source src={source} type="video/mp4"/>
        </video>
    </div>
  )
}
