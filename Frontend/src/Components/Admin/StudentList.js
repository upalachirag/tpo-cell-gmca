import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import * as XLSX from 'xlsx';

const StudentList = () => {

    // onchange states
    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);
    const [StudentList, setStudentList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/admin/StudentList')
            .then(res => setStudentList(res.data))
            .catch(err => console.log(err));
    })

    // onchange event
    const handleFile = (e) => {
        let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
        let selectedFile = e.target.files[0];
        setExcelFile(e.target.files[0]);
        if (selectedFile) {
            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setTypeError(null);
            }
            else {
                setTypeError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('Please select your file');
        }
    }

    // submit event
    const handleFileSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('excel', excelFile);
        axios.post('http://localhost:8081/excelupload', formdata)
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log("Student List Uploaded Successfully");
                } else {
                    console.log("Student List Upload Operation Failed");
                }
            })
            .catch(err => console.log(err));
        document.getElementById('excel').value = null;
    }


    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        {/* <!-- /. ROW  --> */}
                        <div className="row">
                            <div className="col-md-12 col-sm-6 col-xs-12">
                                <form >
                                    <h1 className='page-head-line'>Student List</h1>
                                    <form className="form-inline" style={{ marginBottom: "15px" }} >
                                        <label htmlFor="company_logo">Excel File:</label>
                                        <input type="file" id='excel' className="form-control-file" required onChange={handleFile} />
                                        <button type="submit" className="btn btn-success btn-md" onClick={handleFileSubmit}>UPLOAD</button>
                                    </form>
                                    {typeError && (
                                        <div className="alert alert-danger" role="alert">{typeError}</div>
                                    )}

                                    {/* <button type="submit" className="btn btn-info" style={{ marginBottom: "15px" }}> Upload Excel file </button> */}

                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr style={{ background: "#4380b8a1" }}>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Id</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Enrollment No.</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Full Name</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Mobile No.</th>
                                                <th style={{ backgroundColor: "#4380b8a1" }} >Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {StudentList.map((d, i) => (
                                                <tr>
                                                    <td>{d.id}</td>
                                                    <td>{d.enroll}</td>
                                                    <td>{d.name}</td>
                                                    <td>{d.mobile}</td>
                                                    <td>{d.email}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </form>
                            </div>

                        </div>
                        {/* <!-- /. PAGE INNER  --> */}
                    </div>
                    {/* <!-- /. PAGE WRAPPER  --> */}
                </div>
                {/* <!-- /. WRAPPER  --> */}
            </div>
        </>
    )
}

export default StudentList