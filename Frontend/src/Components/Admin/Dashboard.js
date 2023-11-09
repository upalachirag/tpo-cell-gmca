import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const [student, setstudent] = useState('')
    const [company, setcompany] = useState('')
    const [job, setjob] = useState('')
    const [Sstu, setSstu] = useState('')
    
    useEffect(() => {
        axios.get("http://localhost:8081/stu")
            .then(res => setstudent(res.data));
    })
    useEffect(() => {
        axios.get("http://localhost:8081/company")
            .then(res => setcompany(res.data));
    })
    useEffect(() => {
        axios.get("http://localhost:8081/job")
            .then(res => setjob(res.data));
    })
    useEffect(() => {
        axios.get("http://localhost:8081/Sstu")
            .then(res => setSstu(res.data));
    })

    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-head-line">DASHBOARD</h1>
                            </div>
                        </div>
                        {/* <!-- /. ROW  --> */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="main-box mb-red">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <i className="fa fa-user fa-5x"></i>
                                            <h5>Total Students</h5>
                                        </div>
                                        <div className="col-md-6 fa-3x" style={{ paddingTop: "40px" }}>
                                            {student}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="main-box mb-pink">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <i className="fa fa-tasks fa-5x"></i>
                                            <h5>Placement Drive </h5>
                                        </div>
                                        <div className="col-md-6 fa-3x" style={{ paddingTop: "40px" }}>
                                            {job}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="main-box mb-blue">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <i className="fa fa-th-list fa-5x"></i>
                                            <h5> Selected Students </h5>
                                        </div>
                                        <div className="col-md-6 fa-3x" style={{ paddingTop: "40px" }}>
                                            {Sstu}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="main-box mb-dull">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <i className="fa fa-users fa-5x"></i>
                                            <h5> Total Companies </h5>
                                        </div>
                                        <div className="col-md-6 fa-3x" style={{ paddingTop: "40px" }}>
                                            {company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /. ROW  --> */}


                        {/* <hr /> */}
                        {/* <div className="row">

                            <div className="col-md-8">

                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                                <th>User No.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><span className="label label-danger">Mark</span></td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td><span className="label label-info">100090</span></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>100090</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td><span className="label label-danger">the Bird</span> </td>
                                                <td>@twitter</td>
                                                <td>100090</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> */}
                            {/* <!--/.Row--> */}

                        {/* </div> */}
                        {/* <!-- /. PAGE INNER  --> */}
                    </div>
                    {/* <!-- /. PAGE WRAPPER  --> */}
                </div>
                {/* <!-- /. WRAPPER  --> */}
            </div>
        </>
    )
}

export default Dashboard