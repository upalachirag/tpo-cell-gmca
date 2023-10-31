import React from 'react'

function Offerletter() {
    return (
        <>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body wizard-content">
                            <h4 className="card-title">Upload Offer Letter</h4>
                            <form id="example-form" action="#" className="m-t-40">
                                <div>
                                    <section>
                                        <label htmlfor="letter" className="form-label">Choose your Offerletter file</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="letter" name="letter" />
                                            <label className="custom-file-label" htmlfor="letter">Select file</label>
                                        </div>

                                        <div className="text-left">
                                            <button type="submit" className="btn btn-success">Upload</button>
                                        </div>
                                    </section>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offerletter
