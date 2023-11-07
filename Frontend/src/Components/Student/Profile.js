import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Profile() {
    const [profileData, setProfileData] = useState({
        profilePic: null,
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        address: '',
        course: '',
        year: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfileData({
            ...profileData,
            profilePic: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here. You can access profileData to get the input values and profilePic for the uploaded image.
        console.log('Form data:', profileData);
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
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <label htmlFor="name">Full Name : </label>
                                    <input id="name" name="name" type="text" className="required form-control" />

                                    <label htmlFor="userName">Enrollment No :</label>
                                    <input id="userName" name="userName" type="text" className="required form-control" />

                                    <label htmlFor="email">Email :</label>
                                    <input id="email" name="email" type="text" className="required email form-control" />

                                    <label htmlFor="phone">Mobile No. : </label>
                                    <input id="phone" name="phone" type="text" className="required email form-control" />

                                    <h4 className="card-title" style={{ marginTop: "40px" }}><b>Educational Detail</b></h4>

                                    <form className="form-inline" style={{ marginBottom: "10px" }}>
                                        <label htmlFor='course'>Course : </label>
                                        <select id='course'>
                                            <option>10th</option>
                                            <option>12th</option>
                                            <option>BSC</option>
                                            <option>BCOM</option>
                                            <option>BA</option>
                                            <option>BCA</option>
                                            <option>MCA</option>
                                        </select>
                                        &nbsp;&nbsp;

                                        <label htmlFor='passyear'>Passing Year : </label><input type='text' id='passyear' />

                                        <label htmlFor='cpi'>Percentage/CGPA/CPI : </label><input type='text' id='cpi' />

                                        <button type='submit' className="btn btn-primary">Add+</button>
                                    </form>
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Course</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Passing Year</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Percentage/CGPA/CPI</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }}>Delete</th>
                                                {/* <th>Full Name</th>
                                                <th>Mobile No.</th>
                                            <th>Email</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {StudentList.map((d, i) => ( */}
                                            <tr>
                                                {/* <td>{d.course}</td>
                                                    <td>{d.result}</td> */}
                                                <td>10th</td>
                                                <td>2017</td>
                                                <td>78</td>
                                                <td><a className="btn btn-danger">Delete</a></td>
                                            </tr>
                                            {/* ))} */}
                                        </tbody>
                                    </table>

                                    <h4 className="card-title" style={{ marginTop: "40px" }}><b>Resume</b></h4>

                                    <input type='file' id='resume' name='resume'/>

                                    {/* <h4 className="card-title" style={{ marginTop: "40px" }}><b>Password For Confirmation</b></h4>

                                    <label htmlFor="password">Password </label>
                                    <input id="password" name="password" type="text" className="required form-control" /> */}
                                </div>
                                <div className="text-left">
                                    <Link to="/student/profile" className="btn btn-success" style={{ marginTop: "20px" }}> Submit </Link>
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
