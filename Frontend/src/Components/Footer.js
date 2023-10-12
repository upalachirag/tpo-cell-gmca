import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets2/img/GMCA_LOGO.jpg" alt="Logo" />
              <span>GMCA TPO</span>

            </a>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links d-flex mt-4">
              <a href="/"><i className="bi bi-twitter"></i></a>
              <a href="/"><i className="bi bi-facebook"></i></a>
              <a href="/"><i className="bi bi-instagram"></i></a>
              <a href="/"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About us</a></li>
              <li><a href="/">Company</a></li>
              <li><a href="/">Student</a></li>
              <li><a href="/">Admin</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Recuriters</h4>
            <ul>
              <li><a href="/">Arastu</a></li>
              <li><a href="/">Codevisio</a></li>
              <li><a href="/">Gateway</a></li>
              <li><a href="/">Innvonix</a></li>
              <li><a href="/">Webs Optimization</a></li>
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
