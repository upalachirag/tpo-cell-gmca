import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobApplication = () => {

    const [app, setapp] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/application')
            .then(res => setapp(res.data))
            .catch(err => console.log(err));
    })

    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12 col-sm-6 col-xs-12">

                                <form>
                                    <h1 className='page-head-line'>Job & Internship Application</h1>
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr style={{ background: "#4380b8a1" }}>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Company Name</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Job Title</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Student Name</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Student Enrollment No.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {app.map((d, i) => (
                                                <tr>
                                                    <td data-label="Company" title="">{d.company}</td>
                                                    <td data-label="job" title="">{d.job}</td>
                                                    <td data-label="name" title="">{d.name}</td>
                                                    <td data-label="enroll" title="">{d.enroll}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /. WRAPPER  --> */}
            </div >
        </>
    )
}

export default JobApplication