import React, { useState } from 'react';
import './style.css'
import './profile.css'; // Import your custom CSS if needed
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

function Profile() {
  const [name, setName] = useState('John Doe');
  const [enrollmentNo, setEnrollmentNo] = useState('S123456');
  const [program, setProgram] = useState('Computer Science');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [semester, setSemester] = useState('2nd Semester');
  const [year, setYear] = useState('2nd Year');
  const [isEditing, setIsEditing] = useState(false);

  const [newImage, setNewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'enrollmentNo') {
      setEnrollmentNo(value);
    } else if (name === 'semester') {
      setSemester(value);
    } else if (name === 'year') {
      setYear(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleImageUpdate = () => {
    // You can add code to update the image here (e.g., upload to a server).
  };

  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent the form from submitting (or use type="button" for the button).
    setIsEditing(false);
    // Add code to update the user's data (e.g., send to a server).
  };

  const styles = {
    card: {
      margin: '0 auto',
      maxWidth: '400px',
      textAlign: 'center',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      backgroundColor: '#fff',
    },
    profileImage: {
      position: 'relative',
      display: 'inline-block',
    },
    image: {
      border: '5px solid #fff',
      borderRadius: '50%',
      width: '200px',
      height: '200px',
    },
    imageUpload: {
      marginTop: '10px',
    },
    imageInput: {
      display: 'none',
    },
    imageButton: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    imageButtonHover: {
      backgroundColor: '#0056b3',
    },
    attractiveForm: {
      textAlign: 'left',
      padding: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    buttonGroup: {
      marginTop: '20px',
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      cursor: 'pointer',
    },
    buttonSecondary: {
      backgroundColor: '#6c757d',
    },
    buttonPrimary: {
      backgroundColor: '#007bff',
    },
    buttonPrimaryHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div>
      <Header />
      <div className="body">
        <Navbar />
        <div className="container mt-5">
          <section className="section-1">
            <div style={styles.card}>
              <div style={styles.profileImage}>
                <img
                  src={newImage ? URL.createObjectURL(newImage) : 'img/user.jpg'}
                  alt="Student Image"
                  style={styles.image}
                />
                {isEditing && (
                  <div style={styles.imageUpload}>
                    <input type="file" accept="image/*" onChange={handleImageChange} style={styles.imageInput} />
                    <button
                      style={styles.imageButton}
                      onClick={handleImageUpdate}
                    >
                      Update Image
                    </button>
                  </div>
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  ) : (
                    name
                  )}
                </h5>
                <form onSubmit={handleUpdate}>
                  <div style={styles.attractiveForm}>
                    <div style={styles.formGroup}>
                      <label htmlFor="enrollmentNo">Enrollment No:</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="enrollmentNo"
                          value={enrollmentNo}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        enrollmentNo
                      )}
                    </div>
                    <div style={styles.formGroup}>
                      <label>Program:</label>
                      <span className="form-control-plaintext">{program}</span>
                    </div>
                    <div style={styles.formGroup}>
                      <label htmlFor="email">Email:</label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        email
                      )}
                    </div>
                    <div style={styles.formGroup}>
                      <label htmlFor="phone">Phone:</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        phone
                      )}
                    </div>
                    <div style={styles.formGroup}>
                      <label htmlFor="semester">Semester:</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="semester"
                          value={semester}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        semester
                      )}
                    </div>
                    <div style={styles.formGroup}>
                      <label htmlFor="year">Year:</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="year"
                          value={year}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      ) : (
                        year
                      )}
                    </div>
                    {isEditing ? (
                      <div style={styles.buttonGroup}>
                        <button style={styles.button} type="submit" className="btn btn-success">
                          Save
                        </button>
                        <button
                          style={{ ...styles.button, ...styles.buttonSecondary }}
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="btn btn-secondary"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        style={{ ...styles.button, ...styles.buttonPrimary }}
                        type="button"
                        onClick={() => setIsEditing(true)}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
