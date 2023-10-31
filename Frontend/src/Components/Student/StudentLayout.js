import React from 'react'
import { Outlet } from 'react-router-dom'
import Hedaer from './Hedaer'
import FooterS from './FooterS'
import Sidebar from './Sidebar'

const StudentLayout = () => {
  return (
    <>
      <div id="main-wrapper">
        <Hedaer />
        <Sidebar />
        <Outlet />
        <FooterS />
      </div>
    </>
  )
}

export default StudentLayout