import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Placement() {

  const [enroll, setEnroll] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8081/")
      .then(res => {
        if (res.data.valid) {
          setEnroll(res.data.username);
          setDataLoaded(true);
        } else {
          // navigate('/signin');
        }
      })
  }, [])

  const [enrollData, setEnrollData] = useState('');
  useEffect(() => {
    if (dataLoaded) {
      axios.post('http://localhost:8081/enrolldata', { enroll })
        .then(res => {
          setEnrollData(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  })

  const [jobData, setJobData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/student/placement')
      .then(res => {
        setJobData(res.data);
        // console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [])

  const handleApply = (name, title) => {
    const enroll = enrollData.enroll;
    const sname = enrollData.name;
    axios.post('http://localhost:8081/student/apply', { name,title,sname,enroll })
      .then(res => {
        // navigate('/admin/JobManage');
      }).catch(err => console.log(err));
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
        {/* {console.log(jobData[0])}
        {console.log(companyData[0])} */}

        <div className="container-fluid row">
          <div className="card col-12">
            <div className="card-body wizard-content">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr style={{ background: "#4380b8a1" }}>
                    <th style={{ backgroundColor: "#4380b8a1" }} >Company Logo</th>
                    <th style={{ backgroundColor: "#4380b8a1" }} >Company Name</th>
                    {/* <th style={{ backgroundColor: "#4380b8a1" }} >Description</th> */}
                    <th style={{ backgroundColor: "#4380b8a1" }} >Job Title</th>
                    <th style={{ backgroundColor: "#4380b8a1" }} >Offer</th>
                    <th style={{ backgroundColor: "#4380b8a1" }} >Skill</th>
                    <th style={{ backgroundColor: "#4380b8a1" }} >Salary(LPA)</th>
                    <th style={{ backgroundColor: "#4380b8a1" }} >Last Date</th>
                    <th style={{ backgroundColor: "#4380b8a1" }} >Apply</th>
                  </tr>
                </thead>
                <tbody>
                  {jobData.map((jd, i) => (
                    <tr>
                      <td data-label="Company logo" title=""><img src={`http://localhost:8081/images/` + jd.image} height={100} alt='Company Logo' /></td>
                      <td data-label="Company Name" title="">{jd.name}</td>
                      {/* <td data-label="Description" title="">{jd.description}</td> */}
                      <td data-label="Job Title" title="">{jd.title}</td>
                      <td data-label="Offer" title="">{jd.internship ? "internship" : "job"}</td>
                      <td data-label="Skill" title="">{jd.technology}</td>
                      <td data-label="Salary" title="">{jd.salary}</td>
                      <td data-label="Last date" title="">{jd.deadline}</td>
                      <td data-label="Apply"><button onClick={() => handleApply(jd.name, jd.title)} className="label label-primary" >Apply</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Placement;
