import React from 'react'

function Offerletter() {
    return (
        <>
            <div className="page-wrapper">
                {/* Bread crumb and right sidebar toggle */}
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h3>Offer Letter</h3>
                        </div>
                    </div>
                </div>
                {/* End Bread crumb and right sidebar toggle */}
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body wizard-content">
                            <h4 className="card-title">Upload Offer Letter</h4>
                            <label htmlFor="letter" style={{ marginTop:"20px" }}>Select file</label>
                            <input type="file" id="letter" name="letter" />
                            <div className="text-left">
                                <button type="submit" className="btn btn-success" style={{ marginTop:"20px" }}>Upload</button>
                            </div>
                            <label htmlFor="letter" style={{ marginTop:"20px" }}>Privew :</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offerletter
