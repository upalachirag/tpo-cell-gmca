import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobManage = () => {

    const [job, setjob] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8081/jobmanage')
        .then(res => setjob(res.data))
        .catch(err => console.log(err));
    })

    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">

                                <form role="form">
                                    <h1 className='page-head-line'>Job & Internship Managemant</h1>

                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr style={{ background: "#4380b8a1" }}>
                                                <th>Company</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Technology</th>
                                                <th>Salary</th>
                                                <th>Offer</th>
                                                <th>Last Date</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {job.map((d,i)=>(
                                            <tr>
                                                <td data-label="Company" title="">Company</td>
                                                <td data-label="Title" title="">{d.title}</td>
                                                <td data-label="Description" title="">{d.description}</td>
                                                <td data-label="Technology" title="">{d.technology}</td>
                                                <td data-label="Salary" title="">{d.salary}</td>
                                                <td data-label="Offer" title="">{d.internship ? "internship" : "job"}</td>
                                                <td data-label="Last date" title="">{d.deadline}</td>
                                                <td data-label="Edit"><Link to="/editjob" style={{ textDecoration: "none", color: "#008b8b" }}>Edit</Link></td>
                                                <td data-label="Delete"><Link to="/deletejob" style={{ textDecoration: "none", color: "#008b8b" }}>Delete</Link></td>
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

export default JobManage