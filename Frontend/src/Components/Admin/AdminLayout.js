import React from 'react'
import Head from './Head'
import Foot from './Foot'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <Head />
    <Outlet />
    <Foot />
    </>
  )
}

export default AdminLayout