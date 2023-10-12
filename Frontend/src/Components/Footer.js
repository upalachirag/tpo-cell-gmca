import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-12 footer-about">
            <a href="index.html" className="d-flex align-items-center">
            <img src="assets2/img/GMCA.png" width={500} alt="Logo" />
            </a>
            <a href="index.html" className="logo d-flex align-items-center" style={{marginTop:"40px"}}>
              <span>GMCA Training & Placement Cell</span>
            </a>
          </div>

          <div className="col-lg-3 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a target="_blank" rel="noreferrer" href="https://www.gmca.ac.in/">Government MCA College</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/school/government-mca-college-maninagar-ahmedabad/about/">LinkedIn-GMCA</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://www.gtu.ac.in/">Gujarat Technological University</a></li>
              <li><a target="_blank" rel="noreferrer" href="https://gujacpc.admissions.nic.in/">ACPC</a></li>
              {/* <li><a href="/">Admin</a></li> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>Government MCA College Maninagar</p>
            <p>Padmashree K.K. Shastri Educational campus,</p>
            <p>Khokhra Road Ahmedabad (380008)</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+91 792 293 0176</span></p>
            <p><strong>Email:</strong> <span>gmcacmnagar@gmail.com</span></p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>&copy; <span>Copyright</span> <strong className="px-1">ACZ@Developers.com</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
          Designed by <a href="https://bootstrapmade.com/">ACZ</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
