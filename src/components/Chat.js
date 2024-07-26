import { Moodie } from 'moodie';
import React from 'react'

const Chat = ({ props }) => {

  const { name, chat, avatarData } = props;

  return (
    <div className={`flex w-full items-baseline gap-4 border rounded-3xl p-3 ${props?.me && 'border-green-500'}`}>
      <Moodie className='self-start min-w-[40px]'
        size={40}
        name={avatarData?.name}
        expression={{
          eye: avatarData?.eye,
          mouth: avatarData?.mouth,
        }}
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
      <h4 className='text-white text-wrap break-words break-all'><span className='text-gray-400'>{name}&nbsp;&nbsp;&nbsp;</span>{chat}</h4>
    </div>
  )
}

export default Chat
