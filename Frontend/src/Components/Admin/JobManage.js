import React, { useEffect } from 'react';
import axios from 'axios';

const JobManage = () => {

    useEffect( () => {
        
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
                                                <th>Title</th>
                                                <th>Company</th>
                                                <th>Location</th>
                                                <th>Description</th>
                                                <th>Skills</th>
                                                <th>Applicants</th>
                                                <th>Salary</th>
                                                <th>Contact</th>
                                                <th>Last Date</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Title" title="">Title</td>
                                                <td data-label="Company" title="">Company</td>
                                                <td data-label="Location" title="">Location</td>
                                                <td data-label="Description" title="">Description</td>
                                                <td data-label="Skills" title="">Skills</td>
                                                <td data-label="Applicants" title="">Applicants</td>
                                                <td data-label="Salary" title="">Salary</td>
                                                <td data-label="Contact" title="">Contact</td>
                                                <td data-label="Last date" title="">Last Date</td>
                                                <td data-label="Edit"><a href="/" style={{ textDecoration: "none", color: "#008b8b" }}>Edit</a></td>
                                                <td data-label="Delete"><a href="/" style={{ textDecoration: "none", color: "#008b8b" }}>Delete</a></td>
                                            </tr>
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