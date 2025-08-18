import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'

function Main() {
  return (
    <div className="min-h-screen bg-sky-50 ">
        <Header/>
        <div className="flex overflow-auto">
          <SideBar />
          <MainContent />
         </div>
    </div>
  )
}

export default Main
