import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
//Home
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn';
import ASignIn from './Components/ASignIn';
import SignInAS from './Components/SignInAs';

//Admin
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
import JobAdd from './Components/Admin/JobAdd';
import JobEdit from './Components/Admin/JobEdit';

//student
import Hedaer from './Components/Student/Hedaer';
import Sidebar from './Components/Student/Sidebar';
import FooterS from './Components/Student/FooterS';
import StudentLayout from './Components/Student/StudentLayout';
import SDashboard from './Components/Student/SDashboard';
import Offerletter from './Components/Student/Offerletter';
import Placement from './Components/Student/Placement';
import Resume from './Components/Student/Resume';
import Profile from './Components/Student/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/signinas' element={<SignInAS />} ></Route>
      <Route path='/signin' element={<SignIn />} ></Route>
      <Route path='/asignin' element={<ASignIn />} ></Route>

      <Route path='student/' element={<StudentLayout/>}>
        <Route path='' element={<SDashboard/> }></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='resume' element={<Resume />}></Route>
        <Route path='letter' element={<Offerletter />}></Route>
        <Route path='placement' element={<Placement/>}></Route>
        <Route path='header' element={<Hedaer />}></Route>
        <Route path='sidebar' element={<Sidebar />}></Route>
        <Route path='footer' element={<FooterS />}></Route>
      </Route>

      <Route path='admin/' element={<AdminLayout />}>
        <Route path='' element={<Dashboard />} />
        <Route path='StuList' element={<StudentList />} />
        <Route path='SelectStu' element={<SelectedStu />} />
        <Route path='Notification' element={<Notification />} />
        <Route path='CompanyManage' element={<CompanyManage />} />
        <Route path='EditCompany/:id' element={<EditCompany />} />
        <Route path='AddCompany' element={<AddCompany />} />
        <Route path='JobManage' element={<JobManage />} />
        <Route path='JobAdd' element={<JobAdd />} />
        <Route path='JobEdit/:id' element={<JobEdit />} />
        <Route path='GalleryManage' element={<GalleryManage />} />
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
