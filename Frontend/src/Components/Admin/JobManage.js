import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const JobManage = () => {

    const [job, setjob] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8081/admin/JobManage')
        .then(res => setjob(res.data))
        .catch(err => console.log(err));
    })

    const navigate = useNavigate();
    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/JobDelete/' + id)
            .then(res => {
                navigate("/admin/JobManage");
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12 col-sm-6 col-xs-12">

                                <form>
                                    <h1 className='page-head-line'>Job & Internship Managemant</h1>
                                    <Link to="/admin/JobAdd" className="btn btn-lg btn-primary" style={{ marginBottom: '20px' }}>
                                        Add Job/Internship <i className="glyphicon glyphicon-plus"></i>
                                    </Link>
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr style={{ background: "#4380b8a1" }}>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Company</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Title</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Description</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Technology</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Salary(LPA)</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Offer</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Last Date</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Edit</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {job.map((d,i)=>(
                                            <tr>
                                                <td data-label="Company" title="">{d.company_id}</td>
                                                <td data-label="Title" title="">{d.title}</td>
                                                <td data-label="Description" title="">{d.description}</td>
                                                <td data-label="Technology" title="">{d.technology}</td>
                                                <td data-label="Salary" title="">{d.salary}</td>
                                                <td data-label="Offer" title="">{d.internship ? "internship" : "job"}</td>
                                                <td data-label="Last date" title="">{d.deadline}</td>
                                                <td data-label="Edit"><Link to={`/admin/JobEdit/${d.id}`} className="label label-primary" >Edit</Link></td>
                                                <td data-label="Delete"><Link onClick={() => handleDelete(d.id)} className="label label-danger" >Delete</Link></td>
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