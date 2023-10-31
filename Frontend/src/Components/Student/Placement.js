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
        <div className="container-fluid">
          <div className="card">
            <div className="card-body wizard-content">
              <h4 className="card-title">Placement Drive Form</h4>
              <h6 className="card-subtitle"></h6>
              <form id="placement-drive-form" action="#" className="m-t-40">
                <div>
                  <section>
                    <div className="form-group">
                      <label htmlFor="companyLogo">Company Logo (Image URL)</label>
                      <input
                        type="text"
                        name="companyLogo"
                        className="form-control"
                        onChange={handleInputChange}
                        value={driveDetails.companyLogo}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="companyName">Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        className="form-control"
                        onChange={handleInputChange}
                        value={driveDetails.companyName}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        name="location"
                        className="form-control"
                        onChange={handleInputChange}
                        value={driveDetails.location}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        name="website"
                        className="form-control"
                        onChange={handleInputChange}
                        value={driveDetails.website}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="internshipPositions">Number of Internship Positions</label>
                      <input
                        type="number"
                        name="internshipPositions"
                        className="form-control"
                        onChange={handleInputChange}
                        value={driveDetails.internshipPositions}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="requiredSkills">Required Skills</label>
                      <textarea
                        name="requiredSkills"
                        className="form-control"
                        rows="4"
                        onChange={handleInputChange}
                        value={driveDetails.requiredSkills}
                      ></textarea>
                    </div>
                  </section>
                </div>
                <div className="text-left">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleApply}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Placement;
