import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'


const Body = () => {
  const isOpen = useSelector((store) => store.sidebar.isOpen);

  return (
    <div className='mt-[90px] flex items-stretch '>
      {isOpen && <SideBar />}
      <Outlet />
    </div>
  )
}

export default Body
