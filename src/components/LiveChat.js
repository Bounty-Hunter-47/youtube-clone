import React, { useEffect } from 'react'
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/chatSlice';
import randomName from '../utils/randomName';
import LiveChatSubmit from './LiveChatSubmit';
import getMoodieData from '../utils/RandomAvatar';

const LiveChat = () => {

  const chats = useSelector(store => store.chats.messages);
  console.log(getMoodieData());
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChat(
          {
            name: randomName() || "Random Man",
            chat: "helo",
            avatarData: getMoodieData()
          }
        )
      )
    }, 700);
    return () => {
      clearInterval(i);
    }
  }, []);

  if (!chats || chats.length <= 0) {
    return <div>No messages yet</div>;
  }

  return (
    <>
      <div className='bg-slate-900  w-full rounded-md p-3 '>
        <h1 className='py-2 pl-4 text-2xl text-white'>Live Chat</h1>
        <div className='h-[570px] flex flex-col-reverse gap-2 px-2 overflow-y-auto cursor-pointer'>
          {
            chats.map(chat => <Chat props={chat} />)
          }
        </div>
        <LiveChatSubmit />
      </div>
    </>
  )
}

export default LiveChat
