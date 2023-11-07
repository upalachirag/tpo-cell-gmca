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
        axios.delete('http://localhost:8081/CompanyDelete/' + id)
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
                            <div className="col-md-12 col-sm-6 col-xs-12">

                                <form >
                                    <h1 className='page-head-line'>Company Managemant</h1>
                                    <Link to="/admin/AddCompany" className="btn btn-lg btn-primary" style={{ marginBottom: '20px' }}>
                                        Add Company <i className="glyphicon glyphicon-plus"></i>
                                    </Link>
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr style={{ background: "#4380b8a1" }}>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Id</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Name</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Logo</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Description</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Technology</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Location</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Edit</th>
                                                <th style={{ backgroundColor : "#4380b8a1"}} >Delete</th>
                                            </tr>
                                        </thead>                                 <tbody>
                                            {Company.map((d, i) => (
                                                <tr>
                                                    <td data-label="Id" >{d.id}</td>
                                                    <td data-label="Name" >{d.name}</td>
                                                    <td data-label="Logo" ><img src={`http://localhost:8081/images/`+d.image} height={100} alt='logo' /></td>
                                                    <td data-label="Description" >{d.description}</td>
                                                    <td data-label="Technology" >{d.technology}</td>
                                                    <td data-label="Location" >{d.location}</td>
                                                    <td data-label="Edit"><Link className="label label-primary" to={`/admin/EditCompany/${d.id}`}>Edit</Link></td>
                                                    <td data-label="Delete"><Link className="label label-danger" onClick={() => handleDelete(d.id)}>Delete</Link></td>
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