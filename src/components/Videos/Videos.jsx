import React from 'react'
import VideoCard from './VideoCard';
import "./Videos.css"

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((item,index)=>{
                return <VideoCard key={item.name} index={index} image={item.image} name={item.name} />
            })
        }
    </div>
  )
}

export default Videos