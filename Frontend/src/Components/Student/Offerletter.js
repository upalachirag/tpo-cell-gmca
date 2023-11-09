import axios from 'axios'
import React, { useState } from 'react'

function Offerletter() {

    const [company, setCompany] = useState('');
    const [job, setjob] = useState('');
    const [name, setname] = useState('');
    const [enroll, setenroll] = useState('');

    const handleApply = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student/select', { company,job,name,enroll })
          .then(res => {
            // navigate('/student/offerlatter');
          }).catch(err => console.log(err));
      };

    return (
        <>
            <div className="page-wrapper">
                {/* Bread crumb and right sidebar toggle */}
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h3>Offer Letter</h3>
                        </div>
                    </div>
                </div>
                {/* End Bread crumb and right sidebar toggle */}
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body wizard-content">
                            <h4 className="card-title">Upload Offer Letter</h4>
                            <form id="example-form" action="#" className="m-t-40">
                                <label htmlFor="letter" style={{ marginTop: "20px" }}>Select file</label>
                                <input type="file" id="letter" name="letter" /><br/>

                                <label htmlFor="enroll">Enrollment No :</label>
                                <input id="enroll" onChange={e => setenroll(e.target.value)} name="enroll" type="text" className="required form-control" />

                                <label htmlFor="name">Full Name : </label>
                                <input id="name" onChange={e => setname(e.target.value)} name="name" type="text" className="required form-control" />

                                <label htmlFor="company">Company Name :</label>
                                <input id="company" onChange={e => setCompany(e.target.value)} name="company" type="text" className="required email form-control" />

                                <label htmlFor="dept">Department : </label>
                                <input id="dept" onChange={e => setjob(e.target.value)} name="dept" type="text" className="required form-control" />

                                {/* <br/> */}
                                {/* <label htmlFor="jobtyp">Job/Internship : </label>&nbsp;&nbsp;
                                <select>
                                    <option name="jobtyp">job</option>
                                    <option name="jobtyp">Internship</option>
                                </select> */}

                                <div className="text-left">
                                    <button onClick={handleApply} className="btn btn-success" style={{ marginTop: "20px" }}>Submit</button>
                                </div>
                            </form>
                            <label htmlFor="letter" style={{ marginTop: "20px" }}>Privew :</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offerletter
