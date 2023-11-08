import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCompany = () => {

    const [Name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [Technology, setTechnology] = useState('');
    const [Location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/admin/AddCompany', { Name, Description, Technology, Location })
            .then(res => {
                navigate('/admin/CompanyManage');
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
                                                <label>Name</label>
                                                <input className="form-control" type="text" onChange={e => setName(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label className='btn-info'>Upload photo from "Gallery" section</label>
                                            </div>

                                            {/* <div className="form-group">
                                                <label>Logo</label>
                                                <div className="">
                                                    <div className="fileupload fileupload-new" data-provides="fileupload">
                                                        <span className="btn btn-file btn-default">
                                                            <span className="fileupload-new">Select file</span>
                                                            <span className="fileupload-exists">Change</span>
                                                            <input type="file" onChange={handleFile} />
                                                        </span>
                                                        <span className="fileupload-preview"></span>
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className="form-group">
                                                <label>Description</label>
                                                <input className="form-control" type="text" onChange={e => setDescription(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Technology</label>
                                                <input className="form-control" type="text" onChange={e => setTechnology(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Location</label>
                                                <input className="form-control" type="text" onChange={e => setLocation(e.target.value)} />
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

export default AddCompany