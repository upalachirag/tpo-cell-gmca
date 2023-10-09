import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CompanyManage = () => {

    const [Company, setCompany] = useState([]);
    // const [Image, setImage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8081/admin/CompanyManage')
            .then(res => setCompany(res.data))
            .catch(err => console.log(err));
    },[])

    // const navigate = useNavigate();
    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/deleteCompany/' + id)
            .then(res => {
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
                            <div className="col-md-6 col-sm-6 col-xs-12">

                                <form >
                                    <h1 className='page-head-line'>Company Managemant</h1>
                                    <Link to="/admin/AddCompany" className="btn btn-lg btn-primary" style={{ marginBottom: '20px' }}>
                                        Add Company <i className="glyphicon glyphicon-plus"></i>
                                    </Link>
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr style={{ background: "#4380b8a1" }}>
                                                <th>Name</th>
                                                <th>Logo</th>
                                                <th>Description</th>
                                                <th>Technology</th>
                                                <th>Location</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Company.map((d, i) => (
                                                <tr>
                                                    <td data-label="Name" title="">{d.name}</td>
                                                    <td data-label="Logo" title=""><img src="" alt='logo' /></td>
                                                    <td data-label="Description" title="">{d.description}</td>
                                                    <td data-label="Technology" title="">{d.technology}</td>
                                                    <td data-label="Location" title="">{d.location}</td>
                                                    <td data-label="Edit"><Link to={`/admin/EditCompany/${d.id}`}>Edit</Link></td>
                                                    <td data-label="Delete"><Link onClick={() => handleDelete(d.id)}>Delete</Link></td>
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

export default CompanyManage