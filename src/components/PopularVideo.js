import React, { useEffect, useState } from 'react'
import { GET_YOUTUBE_VIDEOS } from '../utils/constants';
import { VideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const PopularVideo = () => {

  const [videoByCategory, setVideoByCategory] = useState([]);

  const VIDEO_CATEGORY = {
    "Film & Animation": 1,
    "Music": 10,
    "Sports": 17,
  }

  useEffect(() => {
    getVideos(VIDEO_CATEGORY['Film & Animation']);
  }, []);

  const getVideos = async (category) => {
    const data = await fetch(`${GET_YOUTUBE_VIDEOS} + &videoCategoryId=${category}`);
    const json = await data.json();
    setVideoByCategory(json?.items);
  }

  if (!videoByCategory || videoByCategory.length === 0) return <p>Loading...</p>

  return (
    <div className='flex flex-col w-full gap-4 items-center'>
      {
        videoByCategory.map(video => {
          return <Link to={'/watch?v=' + video.id}> <VideoCard video={video} /></Link>
        })
      }
    </div>
  )
}

export default PopularVideo
