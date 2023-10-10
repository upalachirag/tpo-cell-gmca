import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const JobAdd = () => {

    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Technology, setTechnology] = useState('');
    const [Salary, setSalary] = useState('');
    const [Offer, setOffer] = useState('');
    const [LastDate, setLastDate] = useState('');
    const [CompanyId, setCompanyId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/admin/JobAdd', { Title, Description, Technology, Salary, Offer, LastDate, CompanyId })
            .then(res => {
                navigate('/admin/JobManage');
            }).catch(err => console.log(err));
    }

    return (
        <>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Company</h1>
                            {/* <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1> */}
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        Add Company Form
                                    </div>
                                    <div className="panel-body">
                                        <form onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label>Title</label>
                                                <input className="form-control" type="text" onChange={e => setTitle(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Description</label>
                                                <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Technology</label>
                                                <input className="form-control" type="text" onChange={e => setTechnology(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Salary in LPA</label>
                                                <input className="form-control" type="text" onChange={e => setSalary(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Offer (Enter 0 for "job" & 1 for "Internship")</label>
                                                <input className="form-control" type="text" onChange={e => setOffer(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Last Date</label>
                                                <input className="form-control" type="date" onChange={e => setLastDate(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>CompanyId</label>
                                                <input className="form-control" type="text" onChange={e => setCompanyId(e.target.value)} />
                                            </div>

                                            <button type="submit" className="btn btn-danger">Add</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /. ROW  --> */}
                </div>
            </div>
        </>
    )
}

export default JobAdd