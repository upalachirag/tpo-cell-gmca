import React from 'react'
import { Link } from 'react-router-dom';

const ProfileView = () => {
    return (
        <>
            <div className="page-wrapper">
                {/* Bread crumb and right sidebar toggle */}
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h3>Profile</h3>
                        </div>
                    </div>
                </div>
                {/* End Bread crumb and right sidebar toggle */}
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body wizard-content">
                            <form id="example-form" action="#" className="m-t-40">
                                <div>
                                    <h4 className="card-title" style={{ color: "#1f262d" }}><b>Personal Detail</b></h4>
                                    <div className="form-group">
                                        <img src='' alt='Profile Picture' height={100} />
                                    </div>
                                    <label htmlFor="name">Full Name : </label>
                                    &nbsp;&nbsp;<i id="name" name="name">Chirag</i><br />

                                    <label htmlFor="userName">Enrollment No :</label>&nbsp;&nbsp;
                                    <i id="userName" name="userName" >225690694066</i><br />

                                    <label htmlFor="phone">Mobile No. :</label>&nbsp;&nbsp;
                                    <i id="phone" name="phone" >9328043842</i><br />

                                    <label htmlFor="email">Email :</label>&nbsp;&nbsp;
                                    <i id="email" name="email" >chirag@gmail.com</i><br />

                                    <h4 className="card-title" style={{ paddingTop: "15px", color: "#1f262d" }}><b>Educational Detail</b></h4>

                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th style={{ backgroundColor : "#4380b8a1"}}>Course</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}}>Passing Year</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}}>Percentage/CGPA/CPI</th>
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
                                                </tr>
                                            {/* ))} */}
                                        </tbody>
                                    </table>

                                    <h4 className="card-title" style={{ paddingTop: "15px" }}><b>Resume</b></h4>
                                </div>
                                <div className="text-left">
                                    <Link to="/student/updateprofile" className="btn btn-primary mt-4">Edit</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileView