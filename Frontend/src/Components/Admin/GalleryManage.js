import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GalleryManage = () => {

    const [CompanyImage, setCompanyImage] = useState();
    const [CompanyId, setCompanyId] = useState();
    const [Company, setCompany] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/admin/CompanyManage')
            .then(res => setCompany(res.data))
            .catch(err => console.log(err));
    }, [])

    const handleCompanyImage = (e) => {
        setCompanyImage(e.target.files[0])
    }

    const handleCompanyImageUpload = () => {
        const formdata = new FormData();
        formdata.append('image', CompanyImage);
        axios.post('http://localhost:8081/uploadCompanyImage/' + CompanyId, formdata)
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log("Company Image Added Successfully");
                } else {
                    console.log("Company Image Upload Operation Failed");
                }
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

                                <h1 className='page-head-line'>Gallery Managemant</h1>
                                <h1 className="page-subhead-line">Company Photo</h1>
                                <form className="form-inline" style={{ marginBottom: '20px' }}>

                                    <label htmlFor="company_logo">Image:</label>
                                    <input type="file" onChange={handleCompanyImage} className="form-control-file" id="company_logo" />

                                    <label htmlFor="company_id">Company Id:</label>
                                    <input type="number" id="company_id" onChange={e => setCompanyId(e.target.value)} placeholder="Company Id" />
                                    <button onClick={handleCompanyImageUpload} className="btn btn-lg btn-primary" type="submit">Add Image <i className="glyphicon glyphicon-plus"></i></button>
                                </form>
                                {/* <Link to="" className="btn btn-lg btn-primary" style={{ marginBottom: '20px' }}>
                                        Add Company Photo <i className="glyphicon glyphicon-plus"></i>
                                    </Link> */}
                                <table className="table table-striped table-bordered table-hover">

                                    <thead>
                                        <tr style={{ background: "#4380b8a1" }}>
                                            <th style={{ backgroundColor : "#4380b8a1"}} >Company Id</th>
                                            <th style={{ backgroundColor : "#4380b8a1"}} >Name</th>
                                            <th style={{ backgroundColor : "#4380b8a1"}} >Image</th>
                                            {/* <th>Edit</th>
                                                <th>Delete</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Company.map((d, i) => (
                                            <tr>
                                                <td data-label="CompanyId" >{d.id}</td>
                                                <td data-label="Name" >{d.name}</td>
                                                <td data-label="Image"><img src={`http://localhost:8081/images/` + d.image} height={100} alt='Company Logo' /></td>
                                                {/* <td data-label="Edit"><a href="/" style={{ textDecoration: "none", color: "#008b8b" }}>Edit</a></td>
                                                <td data-label="Delete"><a href="/" style={{ textDecoration: "none", color: "#008b8b" }}>Delete</a></td> */}
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

export default GalleryManage