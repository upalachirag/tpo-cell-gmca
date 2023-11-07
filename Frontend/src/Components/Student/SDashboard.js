import React from 'react'

function SDashboard() {
    return (
        <>
            <div className="page-wrapper">
                {/* Bread crumb and right sidebar toggle */}
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h3>Dashboard</h3>
                        </div>
                    </div>
                </div>
                {/* End Bread crumb and right sidebar toggle */}
                {/* Container fluid */}
                <div className="container-fluid">
                    {/* Sales Cards */}
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-cyan text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-view-dashboard"></i></h1>
                                    <h6 className="text-white">Dashboard</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-danger text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-account"></i></h1>
                                    <h6 className="text-white">Profile</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-info text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-briefcase"></i></h1>
                                    <h6 className="text-white">Placemnet Drive</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-warning text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-file-document"></i></h1>
                                    <h6 className="text-white">Resume</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 col-xlg-3">
                            <div className="card card-hover">
                                <div className="box bg-success text-center">
                                    <h1 className="font-light text-white"><i className="mdi mdi-file-document"></i></h1>
                                    <h6 className="text-white">Offer Letter</h6>
                                </div>
                            </div>
                        </div>

                        {/* Add other columns similarly */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SDashboard
