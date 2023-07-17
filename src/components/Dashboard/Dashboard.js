import React from 'react'
import SideUserBar from './components/SideUserBar'
import MainSideBar from './components/MainSideBar'
import ChatBox from './components/ChatBox'
import Friends from './components/Friends'

function Dashboard() {
  return (
    <div className='flex flex-row w-screen h-screen m-0'>

      <div className='w-1/12'>
        <SideUserBar/>
      </div>

      <div className='w-1/5'>
        <MainSideBar/>
      </div>

      <div className='w-8/12'>
        <ChatBox />
      </div>

      <div className='w-1/5'>
        <Friends/>
      </div>

    </div>
  )
}

export default Dashboard