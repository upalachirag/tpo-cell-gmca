import React from 'react'
import Head from './Head.js'
import Foot from './Foot.js'
import StudentList from './StudentList.js'
import SelectedStu from './SelectedStu.js'
import Notification from './Notification.js'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard.js'

const Main = () => {
    return (
        <>
            <Head />
            <div id="wrapper">
                <div id="page-wrapper">
                    
                </div>
                {/* <!-- /. WRAPPER  --> */}
            </div>
            <Foot />
        </>
    )
}

export default Main