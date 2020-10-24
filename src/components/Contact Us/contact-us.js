import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';

//Import Section Title
import SectionTitle from "../common/section-title";

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state = {name: "", email: "", subject: "", comments: ""};
    }

    resetForm = () => {
        this.setState({fullName: "", email: "", message: ""})
    }

    handleForm = e => {
        axios.post(
            "https://formcarry.com/s/WBcqMnKlNt",
            this.state,
            {headers: {"Accept": "application/json"}}
          )
          .then(function (response) {
            let successMessage = document.querySelector('.success-message');
            successMessage.innerHTML = "Thank you for getting in touch! We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. Otherwise, we will reply by email as soon as possible. Talk to you soon."
            let remove1 = document.querySelector('.remove1');
            remove1.innerHTML = ""
            let remove2 = document.querySelector('.remove2');
            remove2.innerHTML = ""
            let remove3 = document.querySelector('.remove3');
            remove3.innerHTML = ""
            let remove4 = document.querySelector('.remove4');
            remove4.innerHTML = ""
          })
          .catch(function (error) {
            let successMessage = document.querySelector('.success-message');
            successMessage.innerHTML = JSON.stringify(error);
          });

        e.preventDefault();
        this.setState({name: '', email: '', subject: '', comments: ''}) // <= here
      }

    handleFields = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <React.Fragment>
                <section className="section " id="contact">
                    <Container>
                        {/* Render section title */}
                        <SectionTitle title="Get In Touch"/>

                        <Row>
                            <Col lg="4">
                                <div className="mt-4 pt-4">
                                    <p className="mt-4"><span className="h5">Office Address:</span><br/> <span className="text-muted d-block mt-2">365 Driftwood Ln, P.0. Box 88 <br/>Advocate Harbour NS <br/>B0M 1A0</span></p>
                                    <p className="mt-4"><span className="h5">Contact:</span><br/> <span className="text-muted d-block mt-2">+ 1 902 392 2170<br/>meraqua@capedor.co</span></p>
                                    <p className="mt-4"><span className="h5">Working Hours:</span><br/> <span className="text-muted d-block mt-2">8:00AM To 4:30PM</span></p>
                                </div>
                            </Col>
                            <Col lg="8">
                                <div className="custom-form mt-4 pt-4">
                                    <div id="message"></div>
                                    <AvForm name="contact-form" id="contact-form" onSubmit={this.handleForm}>
                                        <Row className="remove1">
                                            <Col lg="6">
                                                <AvField onChange={this.handleFields} value={this.state.name} type="text" className="form-group mt-2" name="name" id="name" placeholder="Your name*" required
                                                    errorMessage=""
                                                    validate={{
                                                        required: {value: true, errorMessage: 'Please enter your name'},
                                                      }}
                                                />
                                            </Col>
                                            <Col lg="6">
                                                <AvField onChange={this.handleFields} value={this.state.email} type="email" className="form-group mt-2" name="email" id="email" placeholder="Your email*" required
                                                    errorMessage=""
                                                    validate={{
                                                        required: {value: true, errorMessage: "Please enter your email"},
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="remove2">
                                            <Col lg="12">
                                                <AvField onChange={this.handleFields} value={this.state.subject} type="text" className="form-group mt-2" name="subject" id="subject"placeholder="Your Subject.." required
                                                    errorMessage=""
                                                    validate={{
                                                        required: {value: true, errorMessage: 'Please enter your subject'},
                                                        pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'topic is invalid!'},
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="remove3">
                                            <Col lg="12">
                                                <div className="form-group mt-2">
                                                    <textarea onChange={this.handleFields}value={this.state.comments} name="comments" id="comments"  rows="4" className="form-control" placeholder="Your message..."></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="remove4">
                                            <Col lg="12" className="text-right">
                                                <Button  type="submit" className="submitBnt btn btn-custom">Send Message</Button>
                                                <div id="simple-msg"></div>
                                            </Col>
                                        </Row>
                                        <div className="success-message h5 padding-t-15">
                                            <label></label>
                                        </div>
                                    </AvForm>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default ContactUs;
