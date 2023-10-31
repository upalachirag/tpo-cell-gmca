import React from 'react'

function Resume() {
    return (
        <>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body wizard-content">
                            <h4 className="card-title">Upload Resume</h4>
                            <form id="example-form" action="#" className="m-t-40">
                                <div>

                                    <section>

                                        <label for="resume" className="form-label">Choose your resume file</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="resume" name="resume" />
                                            <label className="custom-file-label" for="resume">Select file</label>
                                        </div>
                                    </section>
                                </div>
                                <div className="text-left">
                                    <button type="submit" className="btn btn-success">Upload</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume
