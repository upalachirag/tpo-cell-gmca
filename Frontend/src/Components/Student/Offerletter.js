import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import './style.css'

class Offerletter extends React.Component {
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
                <Header />
                <div className="body">
                    <Navbar />
                    <section className="section-1">
                        <h1 className="heading">Upload Offer Letter</h1>
                        <section class="form-container">
                            <form>
                                <div className="box-container">
                                    <p>Offer Letter:</p>
                                    <input type="file" accept=".pdf" class="box" id="pdfInput" />
                                    <input type="submit" value="Upload Offer Letter" name="submit" class="btn" />
                                </div>
                            </form>
                        </section>

                    </section>

                </div>
                <div>
                    <Footer />

                </div>
            </div>
        );
    }
}

export default Offerletter;
