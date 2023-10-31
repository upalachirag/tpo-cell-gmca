import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import './style.css'

class SDashboard extends React.Component {
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
        
        <input type="checkbox" id="checkbox" checked={isChecked} onChange={this.handleCheckboxChange} />
        <Header/>
        <div className="body">
        <Navbar/>
          <section className="section-1">

          </section>

        </div>
        <div>
         <Footer/>

        </div>
      </div>
    );
  }
}

export default SDashboard;
