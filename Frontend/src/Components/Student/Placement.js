import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import './style.css'

class Placement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      companies: [
        {
          id: 1,
          name: 'Company A',
          job: 'Software Developer',
          internshipStipend: '$1,000 per month',
          lastDateToApply: '2023-12-31',
        },
        {
          id: 2,
          name: 'Company B',
          job: 'Data Analyst',
          internshipStipend: '$800 per month',
          lastDateToApply: '2023-12-15',
        },
        {
          id: 3,
          name: 'Company C',
          job: 'Web Designer',
          internshipStipend: '$900 per month',
          lastDateToApply: '2023-11-30',
        },
      ],
    };
  }

  handleApply = (companyId) => {
    // Handle the "Apply" button click here.
    // You can perform actions based on the selected company.
    console.log(`Applied to Company with ID: ${companyId}`);
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    const { isChecked, companies } = this.state;

    return (
      <div>
        <input type="checkbox" id="checkbox" checked={isChecked} onChange={this.handleCheckboxChange} />
        <Header />
        <div className="body">
          <Navbar />
          <section className="section-1">
            <h1 className="heading">Company List</h1>
            <section className="form-container">
              <ul>
                {companies.map((company) => (
                  <li key={company.id}>
                    <div className="company-item">
                      <h2 className="company-name">{company.name}</h2>
                      <p>Job: {company.job}</p>
                      <p>Internship Stipend: {company.internshipStipend}</p>
                      <p>Last Date to Apply: {company.lastDateToApply}</p>
                      <button
                        className="apply-button"
                        onClick={() => this.handleApply(company.id)}
                        style={{
                          backgroundColor: '#007BFF',
                          color: '#fff',
                          padding: '10px 20px',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: 'pointer',
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Placement;
