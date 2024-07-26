import React, { useRef, useState } from 'react'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addChat } from '../utils/chatSlice';
import getMoodieData from '../utils/RandomAvatar';

const LiveChatSubmit = () => {

  const [myChat, setMyChat] = useState('');
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMyChat('');
    inputRef.current.focus();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    dispatch(addChat({
      name: "Jevin sondagar",
      chat: data?.liveChatMessage,
      avatarData: getMoodieData(),
      me: true
    }))
  }

  return (
    <div>
      <form className='flex gap-2 w-full px-4 mt-5' onSubmit={handleSubmit}>
        <input ref={inputRef} className='w-full py-3 rounded-lg outline-none pl-4 bg-slate-200' type="text" name="liveChatMessage" value={myChat} id="" onChange={(e) => { setMyChat(e.target.value) }} />
        <button className='focus:outline-blue-300 hover:outline-blue-300  focus:border-none  hover:border-none border px-8 text-center rounded-lg font-bold uppercase outline-none text-white'>send</button>
      </form>
    </div>
  )
}

export default LiveChatSubmit
