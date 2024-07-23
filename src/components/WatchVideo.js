import React, { useEffect } from 'react'
import { closeSidebar } from '../utils/sidebarSlice'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PopularVideo from './PopularVideo';

const WatchVideo = () => {

  const [videoParams] = useSearchParams();
  const videoId = videoParams.get('v');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar(false));
  }, []);

  return (
    <>
      <div className='pl-10 pr-10 w-full pt-10 shadow-sm bg-slate-300 flex gap-6'>
        <div>
          <iframe className='shadow-xl rounded-lg' width="1280" height="720"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
          <div>comments</div>
        </div>
        <div className='w-full'>
          <PopularVideo />
        </div>
      </div>


    </>
  )
}

export default WatchVideo