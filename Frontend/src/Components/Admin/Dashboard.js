import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-head-line">DASHBOARD</h1>
                            </div>
                        </div>
                        {/* <!-- /. ROW  --> */}
                        <div className="row">
                            <div className="col-md-4">
                                <div className="main-box mb-red">
                                    <a href="#">
                                        <i className="fa fa-bolt fa-5x"></i>
                                        <h5> Students </h5>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="main-box mb-dull">
                                    <a href="#">
                                        <i className="fa fa-plug fa-5x"></i>
                                        <h5> Companies </h5>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="main-box mb-pink">
                                    <a href="#">
                                        <i className="fa fa-dollar fa-5x"></i>
                                        <h5> Selected Students </h5>
                                    </a>
                                </div>
                            </div>

                        </div>
                        {/* <!-- /. ROW  --> */}

                        <div className="row">
                            <div className="col-md-8">
                                {/* <!-- /. ROW  --> */}
                                <hr />

                                <div className="panel panel-default">

                                    <div id="carousel-example" className="carousel slide" data-ride="carousel"
                                        style={{ border: '5px solid #000' }}>

                                        <div className="carousel-inner">
                                            <div className="item active">

                                                <img src="assets/img/slideshow/1.jpg" alt="" />

                                            </div>
                                            <div className="item">
                                                <img src="assets/img/slideshow/2.jpg" alt="" />

                                            </div>
                                            <div className="item">
                                                <img src="assets/img/slideshow/3.jpg" alt="" />

                                            </div>
                                        </div>
                                        {/* <!--INDICATORS--> */}
                                        <ol className="carousel-indicators">
                                            <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                                            <li data-target="#carousel-example" data-slide-to="1"></li>
                                            <li data-target="#carousel-example" data-slide-to="2"></li>
                                        </ol>
                                        {/* <!--PREVIUS-NEXT BUTTONS--> */}
                                        <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left"></span>
                                        </a>
                                        <a className="right carousel-control" href="#carousel-example" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.Chat Panel End--> */}
                        </div>
                        <hr />
                        <div className="row">

                            <div className="col-md-8">

                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                                <th>User No.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><span className="label label-danger">Mark</span></td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td><span className="label label-info">100090</span></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>100090</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td><span className="label label-danger">the Bird</span> </td>
                                                <td>@twitter</td>
                                                <td>100090</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <!--/.Row--> */}
                            <hr />

                            {/* <!--/.ROW--> */}

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

export default Dashboard