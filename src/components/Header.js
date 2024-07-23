import React, { useEffect, useState } from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../utils/sidebarSlice';
import { Link } from 'react-router-dom';
import { GET_SUGGESTIONS } from '../utils/constants';
import { addSuggestion } from '../utils/suggestionSlice';


const Header = () => {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const getSuggestions = async (keyword) => {
    if (keyword === '') {
      setShowSuggestion(false);
      return;
    }
    try {
      const data = await fetch(GET_SUGGESTIONS + '&q=' + keyword);
      if (!data.ok) {
        console.log("response not ok");
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const json = await data.json();
      setSearchResult(json);
    }
    catch (error) {
      console.log('Error:', error);
    }
  }

  const suggestion = useSelector(store => store.suggestion.cache)
  // const CACHE_LIMIT = useSelector(store => store.suggestion.CACHE_LIMIT);
  // const LRU = useSelector(store => store.suggestion.LRU);

  useEffect(() => {
    const timeoutId = setTimeout(() => {

      if (searchKeyword === '' || searchKeyword === undefined) return;

      // getSuggestions(searchKeyword);
      if (suggestion[searchKeyword]) {
        console.log('already cached suggestion', suggestion);
      }
      else {
        dispatch(addSuggestion([searchKeyword, "suggestion for " + searchKeyword]));
        console.log(searchKeyword);
      }
    }, 200)

    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchKeyword])

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleSidebar());
  }

  const handleBlur = (e) => {
    setShowSuggestion(false);
  }

  return (
    <div className='bg-slate-200 fixed inset-0 h-[90px] flex justify-between px-10 items-center shadow-md'>
      <div className='flex gap-x-6 items-center'>
        <GiHamburgerMenu onClick={handleToggle} className='cursor-pointer' size={25} />
        <Link to={'/'}>
          <div className='flex gap-x-3 cursor-pointer'>
            <IoLogoYoutube size={32} fill='red' />
            <span className='font-sans text-2xl font-bold'>Youtube</span>
          </div>
        </Link>
      </div>
      <div className='flex w-1/3 min-w-[400px] items-center bg-slate-100 rounded-lg'>
        <div className='w-full relative' onFocus={() => setShowSuggestion(true)}
          onBlur={(e) => handleBlur(e)}>
          <input
            className='p-2 rounded-lg w-full outline-none'
            type="text"
            onChange={(e) => { setSearchKeyword(e.target.value) }}
          />
          {
            searchResult && searchResult.length !== 0 && showSuggestion &&
            <div className='absolute top-[100%] mt-2 left-0 right-0 bg-white rounded-lg'>
              {
                searchResult?.items.map(suggestion => {
                  return <Link key={suggestion?.id?.videoId} to={'watch?v=' + suggestion?.id?.videoId}> <div className='py-4 px-6 border-b border-grey text-ellipsis overflow-hidden whitespace-nowrap'>{suggestion?.snippet?.title}</div></Link>
                })
              }
            </div>
          }
        </div>
        <button className=' p-3 w-10'><CiSearch /></button>
      </div>
      <div>
        <RxAvatar size={35} />
      </div>
    </div>
  )
}

export default Header
