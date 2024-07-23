import React from 'react'

export const VideoCard = ({ video }) => {

  const { thumbnails, title } = video?.snippet;
  const { viewCount } = video?.statistics;
  return (
    <div className='shadow-2xl rounded-md bg-white w-[370px] h-[300px]'>
      <img className='w-full h-[200px] object-cover rounded-tl-md rounded-tr-md' src={thumbnails?.maxres?.url || thumbnails?.high?.url || thumbnails?.medium?.url} alt="Thumbnail" />
      <div className='flex flex-col p-2 gap-1 '>
        <span className='text-xl text-black line-clamp-1'>{title}</span>
        <span>Views : {viewCount}</span>
      </div>
    </div>
  )
}
