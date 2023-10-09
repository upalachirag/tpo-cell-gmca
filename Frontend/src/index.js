import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import UserLayout from './Components/User/UserLayout';
import Home from './Components/User/Home';
import AdminLayout from './Components/Admin/AdminLayout';
import StudentList from './Components/Admin/StudentList';
import Notification from './Components/Admin/Notification';
import SelectedStu from './Components/Admin/SelectedStu';
import CompanyManage from './Components/Admin/CompanyManage';
import Dashboard from './Components/Admin/Dashboard';
import JobManage from './Components/Admin/JobManage';
import GalleryManage from './Components/Admin/GalleryManage';
import EditCompany from './Components/Admin/EditCompany';
import AddCompany from './Components/Admin/AddCompany';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<UserLayout />} >
        <Route path='' element={<Home />} />
      </Route>
      <Route path='admin/' element={<AdminLayout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='StuList' element={<StudentList />} />
        <Route path='SelectStu' element={<SelectedStu />} />
        <Route path='Notification' element={<Notification />} />
        <Route path='JobManage' element={<JobManage />} />
        <Route path='GalleryManage' element={<GalleryManage />} />
        <Route path='CompanyManage' element={<CompanyManage />} />
        <Route path='EditCompany/:id' element={<EditCompany />} />
        <Route path='AddCompany' element={<AddCompany />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
