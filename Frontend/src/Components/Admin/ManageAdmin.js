import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ManageAdmin = () => {

    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    // const [AdminImage, setAdminImage] = useState();
    const [admin, setadmin] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/admin/AdminManage')
            .then(res => setadmin(res.data))
            .catch(err => console.log(err));
    }, [])

    // const handleAdminImage = (e) => {
    //     setAdminImage(e.target.files[0]);
    // }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/admin/AddAdmin', { name, email, password })
            .then(res => {
                console.log(res);
                navigate('/admin/AdminManage');
            }).catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/AdminDelete/' + id)
            .then(res => {
                // navigate("/admin/AdminManage");
                window.location.reload();
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

                                <h1 className='page-head-line'>Admin Managemant</h1>
                                <form onSubmit={handleSubmit} className="form-inline" style={{ marginBottom: '20px' }}>
                                    <div>
                                        <label htmlFor="name">Name</label>
                                        <input type="text" onChange={e => setname(e.target.value)} id="name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" onChange={e => setemail(e.target.value)} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="text" id="password" onChange={e => setpassword(e.target.value)} />
                                    </div>
                                    <button className="btn btn-lg btn-primary" type="submit">Add Admin</button>
                                </form>
                                {/* <Link to="" className="btn btn-lg btn-primary" style={{ marginBottom: '20px' }}>
                                        Add Company Photo <i className="glyphicon glyphicon-plus"></i>
                                    </Link> */}
                                <table className="table table-striped table-bordered table-hover">

                                    <thead>
                                        <tr style={{ background: "#4380b8a1" }}>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Admin Id</th>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Photo</th>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Name</th>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Email</th>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Password</th>
                                            <th style={{ backgroundColor: "#4380b8a1" }} >Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {admin.map((d, i) => (
                                            <tr>
                                                <td data-label="Id" >{d.id}</td>
                                                <td data-label="Image"><img src={`http://localhost:8081/images/` + d.image} height={80} alt='Admin Photo' /></td>
                                                <td data-label="Name" >{d.name}</td>
                                                <td data-label="Email" >{d.email}</td>
                                                <td data-label="Password" >{d.password}</td>
                                                {/* <td data-label="Edit"><a href="/" style={{ textDecoration: "none", color: "#008b8b" }}>Edit</a></td> */}
                                                <td data-label="Delete"><a onClick={() => handleDelete(d.id)} className="label label-danger" >Delete</a></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /. WRAPPER  --> */}
            </div >
        </>
    )
}

export default ManageAdmin