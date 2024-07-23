import React, { useEffect, useState } from 'react'
import { VideoCard } from './VideoCard'
import { GET_YOUTUBE_VIDEOS } from '../utils/constants'
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videosData, setVideosData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(GET_YOUTUBE_VIDEOS);
        if (!data.ok) {
          console.log(data);
          throw new Error(`HTTP error! status: ${data.error}`);
        }
        const json = await data.json();
        setVideosData(json);
      }
      catch (error) {
        console.error('Error:', error);
      }
    }
    getData();
  }, [])

  const items = videosData?.items;

  if (!items || items.length === 0) {
    return <p>No videos available</p>;
  }

  return (
    <div className='flex bg-slate-400 gap-x-6 w-full overflow-hidden flex-wrap
      p-4 gap-y-6 justify-center pt-10'>
      {
        videosData?.items.map(video => {
          return <Link to={'/watch?v=' + video?.id} key={video?.id}><VideoCard video={video} /></Link>
        })
      }
    </div>
  )
}

export default VideoContainer
