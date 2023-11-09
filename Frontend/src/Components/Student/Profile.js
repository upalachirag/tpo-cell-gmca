import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Profile() {

    const [profilePhoto, setProfilePhoto] = useState('')
    const [name, setName] = useState('')
    const [enroll, setEnroll] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [skill, setSkill] = useState('')
    const [resume, setResume] = useState()
    // const [course, setCourse] = useState()
    // const [passyear, setPassYear] = useState()
    // const [cpi, setCpi] = useState()

    const [dataLoaded, setDataLoaded] = useState(false);
    const [photoLoaded, setPhotoLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8081/")
            .then(res => {
                if (res.data.valid) {
                    setEnroll(res.data.username);
                    setDataLoaded(true);
                } else {
                    // navigate('/signin');
                }
            })
    }, [])

    const [enrollData, setEnrollData] = useState('');
    useEffect(() => {
        if (dataLoaded) {
            axios.post('http://localhost:8081/enrolldata', { enroll })
                .then(res => {
                    setEnrollData(res.data);
                })
                .catch(err => console.log(err));
        }
    })

    const handleInputImage = (e) => {
        setProfilePhoto(e.target.files[0]);
        setPhotoLoaded(true);
    }

    useEffect(() => {
        if (photoLoaded && dataLoaded) {
            const formdata = new FormData();
            formdata.append('image', profilePhoto);
            axios.post('http://localhost:8081/StudentImage/' + enroll, formdata)
                .then(res => {
                    if (res.data.Status === "Success") {
                        console.log("User Image Added Successfully");
                    } else {
                        console.log("User Image Upload Operation Failed");
                    }
                })
                .catch(err => console.log(err));
        }
    })

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student/updateprofile', { name, enroll, email, mobile, skill })
            .then(res => {
                navigate('/student/profile');
            }).catch(err => console.log(err));
    };

    return (
        <>
            <div className="page-wrapper">
                {/* Bread crumb and right sidebar toggle */}
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h3>Update Profile</h3>
                        </div>
                    </div>
                </div>
                {/* End Bread crumb and right sidebar toggle */}
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body wizard-content">
                            <form id="example-form" action="#" className="m-t-40">
                                <h4 className="card-title"><b>Personal Detail</b></h4>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="profilePic">Profile Picture :</label>
                                        <input
                                            type="file"
                                            name="profilePic"
                                            accept="image/*"
                                            onChange={handleInputImage}
                                        />
                                    </div>
                                    <label htmlFor="name">Full Name : </label>
                                    <input id="name" name="name" type="text" onChange={e => setName(e.target.value)} className="required form-control" />

                                    <label htmlFor="enroll">Enrollment No :</label>
                                    <input id="enroll" name="enroll" type="text" onChange={e => setEnroll(e.target.value)} className="required form-control" />

                                    <label htmlFor="email">Email :</label>
                                    <input id="email" name="email" type="text" onChange={e => setEmail(e.target.value)} className="required email form-control" />

                                    <label htmlFor="mobile">Mobile No. : </label>
                                    <input id="mobile" name="mobile" type="text" onChange={e => setMobile(e.target.value)} className="required form-control" />

                                    {/* <h4 className="card-title" style={{ marginTop: "40px" }}><b>Educational Detail</b></h4>

                                    <form className="form-inline" style={{ marginBottom: "10px" }}>
                                        <label htmlFor='course'>Course : </label>
                                        <select id='course' onChange={e => setCourse(e.target.value)}>
                                            <option>10th</option>
                                            <option>12th</option>
                                            <option>BSC</option>
                                            <option>BCOM</option>
                                            <option>BA</option>
                                            <option>BCA</option>
                                            <option>MCA</option>
                                        </select>
                                        &nbsp;&nbsp;

                                        <label htmlFor='passyear'>Passing Year : </label><input type='text' onChange={e => setPassYear(e.target.value)} id='passyear' />

                                        <label htmlFor='cpi'>Percentage/CGPA/CPI : </label><input type='text' onChange={e => setCpi(e.target.value)} id='cpi' />

                                        <button onClick={handleSubmit} className="btn btn-primary">Add+</button>
                                    </form>
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Course</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Passing Year</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Percentage/CGPA/CPI</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Delete</th>
                                                <th>Full Name</th>
                                                <th>Mobile No.</th>
                                            <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {StudentList.map((d, i) => (
                                            <tr>
                                                <td>{d.course}</td>
                                                    <td>{d.result}</td>
                                                <td>10th</td>
                                                <td>2017</td>
                                                <td>78</td>
                                                <td><a className="btn btn-danger">Delete</a></td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </table> */}

                                    <h4 className="card-title" style={{ marginTop: "40px" }}><b>Technical Detail</b></h4>

                                    <label htmlFor="skill">Technical Skills : </label>
                                    <input id="skill" name="skill" type="text" onChange={e => setSkill(e.target.value)} className="form-control" />

                                    <h4 className="card-title" style={{ marginTop: "40px" }}><b>Resume</b></h4>

                                    <input type='file' id='resume' name='resume' />

                                    {/* <h4 className="card-title" style={{ marginTop: "40px" }}><b>Password For Confirmation</b></h4>

                                    <label htmlFor="password">Password </label>
                                    <input id="password" name="password" type="text" className="required form-control" /> */}
                                </div>
                                <div className="text-left">
                                    <Link onClick={handleSubmit} className="btn btn-success" style={{ marginTop: "20px" }}> Submit </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
