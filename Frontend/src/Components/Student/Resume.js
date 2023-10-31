import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import './style.css'

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    const { isChecked } = this.state;

    return (
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={this.handleCheckboxChange}
        />
        <Header />
        <div className="body">
          <Navbar />
          <section className="section-1">
            <h1 className="heading">Upload Resume</h1>
            <section className="form-container">
              <form style={formStyles}>
                <div className="box-container">
                  <p className="form-label">Upload your Resume:</p>
                  <input type="file" accept=".pdf" className="file-input" id="pdfInput" />
                  <button type="submit" className="btn btn-primary">
                    Upload Resume
                  </button>
                </div>
              </form>
            </section>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

const formStyles = {
  padding: '20px',
  backgroundColor: '#f7f7f7',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

export default Resume;
