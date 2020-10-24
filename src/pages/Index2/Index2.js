import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/NavbarPage";
import Section from "./section";
import Clients from '../../components/Clients/clients';
import Features from '../../components/Features/features';
import Services from '../../components/Services/services';
import GetStarted from '../../components/Get Started/get-started';
import ContactUs from '../../components/Contact Us/contact-us';
import Footer from '../../components/Footer/footer-links';

class Index2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          navClass : ""
        };
    }
    componentDidMount()
    {
        document.getElementById("colorTheme").href="assets/colors/blue.css";
    }


    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navClass={this.state.navClass}/>

                {/* Importing Section */}
                <Section/>

                {/* Importing Client */}
                <Clients/>

                {/* Importing Features */}
                <Features/>

                {/* Importing Services */}
                <Services/>

                {/* Importing Get Started */}
                <GetStarted/>

                {/* Importing Contact Us */}
                <ContactUs/>

                {/* Importing Get Footer */}
                <Footer/>

            </React.Fragment>
        );
    }
}

export default Index2;
