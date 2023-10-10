import React, { useState, useEffect } from 'react'
import './Home.css'


function Home() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    // Trigger the animation after a delay or any specific event
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 500); // Delay for 500 milliseconds

    return () => clearTimeout(animationTimeout); // Clear the timeout if the component unmounts
  }, []);

  return (
    <>
      <div className={`head ${animate ? 'fade-in active' : ''}`}>
        <marquee direction="right" scrollamount="15"><h1>Welcome to Government MCA College Training And Placement Cell</h1></marquee>
      </div>
      <div className="container">
        <h2>Introduction to Training and Placement Cell</h2>
        <p>The Training and Placement Cell at Government MCA College is dedicated to providing students with the necessary resources and guidance to excel in their careers. We are committed to bridging the gap between education and industry requirements.</p>
        <p>Training and Placement Cell at GMCA organizes various training programs for students in the technical and non-technical domain for students' development. This cell also organizes placement related activities.</p>
        <br />
        <br />

        <h2>Training & Placement Officer</h2>
        <div className="placement-officer">
          <img src="./images/Bhavesh Sir.jpg" alt="Bhavesh B. Prajapati" />
          <div>
            <h2>Bhavesh B. Prajapati</h2>
            <p>Training & Placement Officer</p>
          </div>
        </div>
        <div className="placement-officer">
          <img src="./images/Darshan Sir.jpg" alt="Darshan Modi" />
          <div>
            <h2>Darshan Modi</h2>
            <p>Training & Placement Coordinator</p>
          </div>
        </div>
        <br />
        <br />

        <h2>Recruiter Companies</h2>
        <div className="recruiters">

          <img src="./images/Arastu.jpg" alt="Arastu Systems" />
          <img src="./images/La Net.jpg" alt="La Net Team Software Solution Pvt Ltd" />
          <img src="./images/Webs Optimization2.jpg" alt="Webs Optimization Software Solution" />
        </div>
        <div className="recruiters">
          <img src="./images/Ordex.jpg" alt="Ordex Technology Solution Inc" />
          <img src="./images/codevision.jpg" alt="Codevision Technologies Private Limited" />
          <img src="./images/Gateway.jpg" alt="Gateway Group" />
          <img src="./images/innvonix.jpg" alt="Innvonix" />
        </div>

      </div>
    </>
  )
}

export default Home
