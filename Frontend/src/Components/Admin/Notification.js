import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notification = () => {
    
    const [notify, setNotify] = useState([]);
    // const [Image, setImage] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8081/admin/Rnotification')
        .then(res => setNotify(res.data))
        .catch(err => console.log(err));
    }, [])
    
    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/admin/Dnotification/' + id)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
    
    const [typeError, setTypeError] = useState(null);
    const [errtyp, setErr] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const handleSubmit2 = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/admin/email', { email, subject, message })
            .then(res => {
                console.log(res.info);
                setTypeError('Email has been sent successfully.');
                setErr('success');
            }).catch(err => {
                console.log(err);
                setTypeError('Failed to send email.');
                setErr('danger');
            });
    }

    const [message, setMessage] = useState('');

    // const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/admin/notification', { message })
            .then(res => {
                // navigate('/admin/Notification');
                window.location.reload();
            }).catch(err => console.log(err));
    }

    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        {/* <!-- /. ROW  --> */}
                        <div className="row">
                            <div className="col-md-12 col-sm-6 col-xs-12">
                                <h1 className='page-head-line'>Notification & Communication</h1>
                                <h1 className="page-subhead-line">Send Brodcast Update</h1>

                                <form onSubmit={handleSubmit} >
                                    <div className="form-group">
                                        <label>Message :</label>
                                        <textarea className="form-control" rows="3" onChange={e => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-info">Send</button>
                                </form><br />
                                <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr style={{ background: "#4380b8a1" }}>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Id</th>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Message</th>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Delete</th>
                                        </tr>
                                    </thead>                                 <tbody>
                                        {notify.map((d, i) => (
                                            <tr>
                                                <td data-label="Id" >{d.id}</td>
                                                <td data-label="msg" >{d.msg}</td>
                                                <td data-label="Delete"><Link className="label label-danger" onClick={() => handleDelete(d.id)}>Delete</Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table><br />

                                <h1 className="page-subhead-line">Send Email</h1>
                                {typeError && (
                                    <div className={`alert alert-${errtyp}`} role="alert">{typeError}</div>
                                )}
                                <form onSubmit={handleSubmit2} >
                                    <div className="form-group">
                                        <label>Email :</label>
                                        <input type='email' className="form-control" rows="3" onChange={e => setEmail(e.target.value)}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Subject :</label>
                                        <input type='text' className="form-control" rows="3" onChange={e => setSubject(e.target.value)}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Message :</label>
                                        <textarea className="form-control" rows="3" onChange={e => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-info">Send</button>
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

export default Notification