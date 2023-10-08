import React from 'react'

const SelectedStu = () => {
    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        {/* <!-- /. ROW  --> */}
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">

                                <form role="form">

                                <h1 className='page-head-line'>Selected Student List</h1>

                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Enrollment-No.</th>
                                                <th>First Name</th>
                                                <th>Company-Name</th>
                                                <th>Department</th>
                                                <th>Placement Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><span className="label label-danger">2256903266</span></td>
                                                <td>Chirag</td>
                                                <td><span className="label label-info">CodeVision</span></td>
                                                <td>Web development</td>
                                                <td> Internship </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><span className="label label-danger">2256906940005</span></td>
                                                <td>Shyam</td>
                                                <td><span className="label label-info">Odex</span></td>
                                                <td>Web development</td>
                                                <td> Internship </td>
                                            </tr>

                                            <tr>
                                                <td>2</td>
                                                <td><span className="label label-danger">2256906940054</span></td>
                                                <td>Megha Shankhala</td>
                                                <td><span className="label label-info">Odex</span></td>
                                                <td>mobile-app development</td>
                                                <td> Internship </td>
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

export default SelectedStu