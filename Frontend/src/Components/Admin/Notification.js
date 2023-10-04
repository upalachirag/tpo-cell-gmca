import React from 'react'
import Head from './Head.js'
import Foot from './Foot.js'

const Notification = () => {
    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        {/* <!-- /. ROW  --> */}
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="panel panel-info">
                                    <div className="panel-heading" >
                                        Noification...
                                    </div>
                                    <div className="panel-body">

                                        <form role="form">
                                            <div className="form-group">
                                                <label>Text area</label>
                                                <textarea className="form-control" rows="3"></textarea>
                                            </div>


                                            <button type="submit" className="btn btn-info">Send Message </button>

                                        </form>
                                    </div>
                                </div>
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

export default Notification