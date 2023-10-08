import React from 'react'

const GalleryManage = () => {
    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">

                                <form role="form">
                                    <h1 className='page-head-line'>Gallery Managemant</h1>

                                    <table className="table table-striped table-bordered table-hover">

                                        <thead>
                                            <tr style={{ background: "#4380b8a1" }}>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Image</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="Title" title="">Title</td>
                                                <td data-label="Venue" title="">Description</td>
                                                <td data-label="Image"><img src="" width="100px" height="80px"/></td>
                                                <td data-label="Edit"><a href="" style={{ textDecoration: "none", color: "#008b8b" }}>Edit</a></td>
                                                <td data-label="Delete"><a href="" style={{ textDecoration: "none", color: "#008b8b" }}>Delete</a></td>
                                            </tr>
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

export default GalleryManage