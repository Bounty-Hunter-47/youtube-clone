import React from 'react'
import { RxAvatar } from "react-icons/rx";

const Comment = ({ comment }) => {

  return (
    <div className='w-full bg-white px-4 py-4 rounded-md flex gap-2 items-top ml-2'>
      {
        comment?.authorProfileImageUrl
          ? <img className='rounded-full w-10 h-10' src={comment?.authorProfileImageUrl} alt="Profile" />
          : <RxAvatar size={35} />
      }
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl'>{comment?.authorDisplayName}</h1>
        <span>{comment?.textOriginal}</span>
      </div>
    </div>
  )
}

export default Comment
