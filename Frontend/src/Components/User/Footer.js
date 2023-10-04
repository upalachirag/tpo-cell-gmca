import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className='foot'>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
                <link rel="stylesheet" type="text/css" href="Footer.css" />
                <section id="contact" className="add-padding">
                    <div className="container-text-center">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="./images/GMCA_LOGO.jpg" className="imgFtlogo" />
                                <h3>Government MCA College Maninagar</h3>
                                <h4>Training Placement Cell</h4>
                            </div>
                            <div className="col-md-4">
                                <h3>SITE LINKS</h3>
                                <ul className="contact-info">
                                    <li><a href="index.html"><i className="fas fa-angle-right"></i> Home</a></li>
                                    <li><a href="about.html"><i className="fas fa-angle-right"></i> Company</a></li>
                                    <li><a href="gallery.html"><i className="fas fa-angle-right"></i> Student</a></li>
                                    <li><a href="contact.html"><i className="fas fa-angle-right"></i> About</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3>Contact Us</h3>
                                <p>Address: Government MCA College Maninagar (E)</p>
                                <p>Padmashree K.K. Shastri Educational campus, Khokhra Road Ahmedabad (380008)</p>
                                <p><i className="fas fa-envelope"></i> <a href="mailto:gmcacmniar@gmail.com">gmcacmniar@gmail.com</a></p>
                            </div>

                        </div>
                    </div>
                    <p className='right'>&copy; 2023 - ACZ@Developers.com</p>
                </section>

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </div>
    </>
  )
}

export default Footer
