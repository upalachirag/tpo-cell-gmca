import React from 'react';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import ScriptTag from 'react-script-tag';
// // Vendor CSS Files
// import './assets2/vendor/bootstrap/css/bootstrap.min.css';
// import './assets2/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets2/vendor/glightbox/css/glightbox.min.css';
// import './assets2/vendor/swiper/swiper-bundle.min.css';
// import './assets2/vendor/aos/aos.css';
// // Template Main CSS File
// import './assets2/css/main.css';

const RecuriterItem = ({ category, title, imageSrc }) => (
    <div className={`col-lg-4 col-md-4 isotope-item ${category}`}>
        <img src={imageSrc} className="img-fluid" alt={title} />
        <div className="portfolio-info">
            <h4>{title}</h4>
            <a href={imageSrc} title={title} data-gallery={`portfolio-gallery-${category}`} className="glightbox preview-link">
                <i className="bi bi-zoom-in"></i>
            </a>
            <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
            </a>
        </div>
    </div>
);

function Home() {
    // Define your portfolio items as an array of objects
    const recuriterItems = [
        {
            category: 'filter-app',
            imageSrc: 'assets2/img/Arastu.jpg',
        },
        {
            category: 'filter-product',
            imageSrc: 'assets2/img/codevision.jpg',
        },
        {
            category: 'filter-product',

            imageSrc: 'assets2/img/Gateway.jpg',
        },
        {
            category: 'filter-app',
            imageSrc: 'assets2/img/innvonix.jpg',
        },
        {
            category: 'filter-product',

            imageSrc: 'assets2/img/Ordex.jpg',
        },
        {
            category: 'filter-app',

            imageSrc: 'assets2/img/Webs Optimization2.jpg',
        },
        // 

        // Add more items as needed
    ];
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container-fluid d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                        {/* Uncomment the line below if you also wish to use an image logo */}
                        {/* <img src="assets/img/logo.png" alt=""> */}
                        <img src="assets2/img/GMCA_LOGO.jpg" alt="Logo" />
                        <h1>GMCA TPO CELL</h1>
                        <span>.</span>
                    </a>

                    {/* Nav Menu */}
                    <nav id="navmenu" className="navmenu">
                        <ul>
                        {/* className="active" */}
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#tpo">TPO</a></li>
                            <li><a href="#recruiter">Recruiter</a></li>
                            <li><a href="#contact">Contact</a></li>
                            {/* <li><a href="/">Admin</a></li>
              <li><a href="/">Student</a></li> */}
                            {/* <li className="dropdown has-dropdown"><a href="/"><span>Placement statistics</span> <i className="bi bi-chevron-down"></i></a>
                                <ul className="dd-box-shadow">
                                    <li><a href="/">2022</a></li>
                                    <li><a href="/">2021</a></li>
                                    <li><a href="/">2020</a></li>
                                    <li><a href="/">2019</a></li>
                                </ul>
                            </li> */}
                        </ul>

                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>{/* End Nav Menu */}

                    <Link className="btn-getstarted" to="/signinas">Sign In</Link>

                </div>
            </header>
            <section id="hero" className="hero">
                <img src="assets2/img/home.jpg" alt="" data-aos="fade-in" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <h2 data-aos="fade-up" data-aos-delay="100">
                                Welcome to Government MCA College Training And Placement Cell
                            </h2>
                            <p data-aos="fade-up" data-aos-delay="200">
                                Help To Get Best Opportunity
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row align-items-xl-center gy-5">
                        <div className="col-xl-5 content">
                            <h3 style={{fontSize:"22px"}}>About Us</h3>
                            <h2>Government MCA College, Maninagar, Ahmedabad</h2>
                            <p> Government MCA College (Maninagar) helps students realize their potential for growth and success through innovative instruction in a nurturing, diverse environment.
                                Students achieve their career and personal goals, strengthening the region's social and economic vibrancy.
                                Strong local and global partnerships with business, industry, labor, and the public make the college a respected contributor to community vitality.
                                The college has a campus of its own, spread over 1.132 acres.
                                Institute is well established with nicely designed, spacious Class Rooms.
                                Classrooms are available to facilitate the teaching-learning process.
                                The college has a Cafeteria, common room for girls and boys, a Students Store, and a playground for some of the major games, viz. Football, Basketball, Volleyball, and Cricket.</p>
                            {/* <a href="about" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a> */}
                        </div>

                        <div className="col-xl-7" style={{marginTop:"50px"}}>
                            <div className="row gy-4 icon-boxes">
                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon-box">
                                        <i className="bi bi-buildings"></i>
                                        <h3>Traning And Placement Cell</h3>
                                        <p> The college also has a very active Training & Placement section.
                                            I invite you to have a look at the profile of our Final and pre Final year students.
                                            These trendy classrooms have comfortable seating arrangements with all modern teaching aids like LCD Projector and VCD players.
                                            I invite you to have a look at the profile of our Final and pre Final year students.
                                            I would also like to take this opportunity to thank you for the invaluable support you have extended to us over the years.
                                            We look forward to nurture and grow old relationships and welcome new recruiters for a long-lasting and mutually beneficial relationship
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon-box">
                                        <i className="bi bi-clipboard-pulse"></i>
                                        <h3>The First Government MCA College</h3>
                                        <p>Government MCA College Maninagar, Ahmedabad is the first Government MCA College in Gujarat.
                                            It was established in June 2012 with facilities to run Master of Computer Application.
                                            In the year 2012, the course was introduced with an intake of 60 students. The college has well-established Central Learning resource centers like Central library, Central Computer Centre, Entrepreneurship Development Cell, Continuing Education Centre, and Physical Education Section.
                                            We are open for all collaborations with industry for knowledge sharing, talent pool sharing and any other in favor of our students.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="tpo" className="recent-posts">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Training & Placement Officer</h2>
                </div>

                <div className="container ">
                    <div className="align-items: center">
                        <div className="row gy-4">
                            <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
                                <article>
                                    <div className="post-img">
                                        <img src="assets2/img/Bhavesh Sir.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <p className="post-category">Bhavesh B. Prajapati</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Training & Placement Officer</a>
                                    </h2>

                                </article>
                            </div>

                            <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
                                <article>
                                    <div className="post-img">
                                        <img src="assets2/img/Darshan Sir.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <p className="post-category">Darshan Modi</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Training & Placement Coordinator</a>
                                    </h2>

                                </article>
                            </div>
                            <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
                                <article>
                                    <div className="post-img">
                                        <img src="assets2/img/Jaimin Sir.jpg" alt="Jaimin sir pic" className="img-fluid" />
                                    </div>
                                    <p className="post-category">Jaimin B. Dave</p>
                                    <h2 className="title">
                                        <a href="blog-details.html">Training & Placement Coordinator</a>
                                    </h2>

                                </article>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section id="recruiter" className="portfolio">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Top Recruiter</h2>
                </div>
                <div className="container">
                    <div
                        className="isotope-layout"
                        data-default-filter="*"
                        data-layout="masonry"
                        data-sort="original-order"
                    >
                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            {recuriterItems.map((item, index) => (
                                <RecuriterItem
                                    key={index}
                                    category={item.category}
                                    title={item.title}
                                    imageSrc={item.imageSrc}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact">

                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact Us</h2>
                </div>
                {/* End Section Title */}

                <div className="m-5" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <div className="info-item" data-aos="fade" data-aos-delay="300">
                                        <i className="bi bi-telephone"></i>
                                        <h3>Call Us</h3>
                                        <p>+91 792 293 0176</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-item" data-aos="fade" data-aos-delay="400">
                                        <i className="bi bi-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>gmcacmnagar@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-item" data-aos="fade" data-aos-delay="200">
                                        <i className="bi bi-geo-alt"></i>
                                        <h3>Address</h3>
                                        <p>Government MCA College Maninagar</p>
                                        <p>Padmashree K.K. Shastri Educational campus,Khokhra Road Ahmedabad (380008)</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-item" data-aos="fade" data-aos-delay="500">
                                        <i className="bi bi-clock"></i>
                                        <h3>Open Hours</h3>
                                        <p>Monday - Friday</p>
                                        <p>9:00AM - 05:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-6 col-md-12 footer-about">
                            <a href="index.html" className="d-flex align-items-center">
                                <img src="images/GMCA.png" width={500} alt="Logo" />
                            </a>
                            <a href="index.html" className="logo d-flex align-items-center" style={{ marginTop: "40px" }}>
                                <span>GMCA Training & Placement Cell</span>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="https://www.gmca.ac.in/">Government MCA College</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/school/government-mca-college-maninagar-ahmedabad/about/">LinkedIn-GMCA</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.gtu.ac.in/">Gujarat Technological University</a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://gujacpc.admissions.nic.in/">ACPC</a></li>
                                {/* <li><a href="/">Admin</a></li> */}
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 footer-contact text-md-start">
                            <h4>Contact Us</h4>
                            <p>Government MCA College Maninagar</p>
                            <p>Padmashree K.K. Shastri Educational campus,</p>
                            <p>Khokhra Road Ahmedabad (380008)</p>
                            <p className="mt-4"><strong>Phone:</strong> <span>+91 792 293 0176</span></p>
                            <p><strong>Email:</strong> <span>gmcacmnagar@gmail.com</span></p>
                        </div>
                    </div>
                </div>

                <div className="copyright text-center mt-4">
                    <p>&copy; <span>Copyright</span> <strong className="px-1">ACZ@Developers.com</strong> <span>All Rights Reserved</span></p>
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you've purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
                        Designed by ACZ
                    </div>
                </div>
            </footer>
            {/* <Helmet>
                <!-- Vendor JS Files -->
                <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/aos/aos.js"></script>
                <!-- Template Main JS File -->
                <script src="assets/js/main.js"></script>
            </Helmet> */}

            {/* <!-- Vendor JS Files --> */}
            {/* <script type="text/javascript" src="./assets2/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script type="text/javascript" src="./assets2/vendor/glightbox/js/glightbox.min.js"></script>
            <script type="text/javascript" src="./assets2/vendor/purecounter/purecounter_vanilla.js"></script>
            <script type="text/javascript" src="./assets2/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script type="text/javascript" src="./assets2/vendor/swiper/swiper-bundle.min.js"></script>
            <script type="text/javascript" src="./assets2/vendor/aos/aos.js"></script>
            <script type="text/javascript" src="./assets2/vendor/php-email-form/validate.js"></script> */}

            {/* <!-- Template Main JS File --> */}
            {/* <script type="text/javascript" src="./assets2/js/main.js"></script> */}
        </>

    )
}

export default Home