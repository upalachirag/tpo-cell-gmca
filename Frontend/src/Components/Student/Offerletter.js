import React from 'react'

function Offerletter() {
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
                                <input id="enroll" name="enroll" type="text" className="required form-control" />

                                <label htmlFor="name">Full Name : </label>
                                <input id="name" name="name" type="text" className="required form-control" />

                                <label htmlFor="company">Company Name :</label>
                                <input id="company" name="company" type="text" className="required email form-control" />

                                <label htmlFor="dept">Department : </label>
                                <input id="dept" name="dept" type="text" className="required form-control" />

                                <br/>
                                <label htmlFor="jobtyp">Job/Internship : </label>&nbsp;&nbsp;
                                {/* <input id="jobtyp" name="jobtyp" type="text" className="required form-control" /> */}
                                <select>
                                    <option name="jobtyp">job</option>
                                    <option name="jobtyp">Internship</option>
                                </select>

                                <div className="text-left">
                                    <button type="submit" className="btn btn-success" style={{ marginTop: "20px" }}>Submit</button>
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
