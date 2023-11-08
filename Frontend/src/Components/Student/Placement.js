import React, { useState } from 'react';


function Placement() {
  const [driveDetails, setDriveDetails] = useState({
    companyLogo: '',
    companyName: '',
    location: '',
    website: '',
    internshipPositions: '',
    requiredSkills: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriveDetails({
      ...driveDetails,
      [name]: value,
    });
  };

  const handleApply = () => {
    // Here, you can implement the logic to handle the placement drive application
    // You can access the driveDetails state to get the form input values
    // For example, you can send this data to the server or perform other actions.
    // Don't forget to handle this logic according to your needs.
    console.log('Applying for placement drive:', driveDetails);
  };

  return (
    <>
      <div className="page-wrapper">
        {/* Bread crumb and right sidebar toggle */}
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12 d-flex no-block align-items-center">
              <h3>Placement Drive</h3>
            </div>
          </div>
        </div>
        {/* End Bread crumb and right sidebar toggle */}
        <div className="container-fluid row">
          <div className="card col-6">
            <div className="card-body wizard-content">
              {/* <h4 className="card-title">Placement Drive Form</h4> */}
              <form id="placement-drive-form" action="#" className="m-t-40">
                  <div className="form-group">
                    <img src='' alt='Company Logo' height={100} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name :</label>&nbsp;&nbsp;
                    <i id="companyName" name="companyName" >CODEVISION</i><br />
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description :</label>&nbsp;&nbsp;
                    <i id="description" name="description" >very good company</i><br />
                  </div>

                  <div className="form-group">
                    <label htmlFor="offer">Offer :</label>&nbsp;&nbsp;
                    <i id="offer" name="offer" >job/internship</i><br />
                  </div>

                  <div className="form-group">
                    <label htmlFor="jobtitle">Job/Internship Title :</label>&nbsp;&nbsp;
                    <i id="jobtitle" name="jobtitle" >job</i><br />
                  </div>

                  <div className="form-group">
                    <label htmlFor="skill">Required Skill :</label>&nbsp;&nbsp;
                    <i id="skill" name="skill" >html,java</i><br />
                  </div>

                  <div className="form-group">
                    <label htmlFor="salary">Salary :</label>&nbsp;&nbsp;
                    <i id="salary" name="salary" >2.4 LPA</i><br />
                  </div>
              </form>
              <div className="text-left">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleApply}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Placement;
