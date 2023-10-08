import React from 'react'

const StudentList = () => {
    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        {/* <!-- /. ROW  --> */}
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <form role="form">

                                    <h1 className='page-head-line'>Student List</h1>

                                    <button type="submit" className="btn btn-info" style={{ marginTop: "15px", marginBottom: "15px" }}> Upload Excel file </button>

                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Enrollment-No.</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Mobile-No:</th>
                                                <th>Email-id</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><span className="label label-danger">Mark</span></td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td><span className="label label-info">100090</span></td>
                                                <td> abc12@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>100090</td>
                                                <td> abc12@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td><span className="label label-danger">the Bird</span> </td>
                                                <td>@twitter</td>
                                                <td>100090</td>
                                                <td> abc12@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td><span className="label label-success">Mark</span></td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td><span className="label label-info">100090</span></td>
                                                <td> abc12@gmail.com</td>
                                            </tr>
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