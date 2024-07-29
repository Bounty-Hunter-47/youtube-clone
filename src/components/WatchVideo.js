import React, { useEffect } from 'react'
import { closeSidebar } from '../utils/sidebarSlice'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PopularVideo from './PopularVideo';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchVideo = () => {

  const [videoParams] = useSearchParams();
  const videoId = videoParams.get('v');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar(false));
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('scrolled to top');
  }, [videoId])

  return (
    <>
      <div className='pl-10 pr-10 w-full pt-10 shadow-sm bg-slate-300 flex flex-col gap-6'>
        <div className='flex gap-10'>
          <iframe className='shadow-xl rounded-lg min-w-[1280px]' width="1280" height="720"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
          <LiveChat />
        </div>
        <div className='w-full flex'>
          <div className='min-w-[1280px] max-w-[1280px]'>
            <CommentsContainer id={videoId} />
          </div>
          <div className='flex justify-center w-full mt-16'>
            <PopularVideo />
          </div>
        </div>
      </div>


    </>
  )
}

export default WatchVideo