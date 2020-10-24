import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class GetStarted extends Component {
    render() {
        return (
            <React.Fragment>
        <section className="section section-lg bg-get-start">
            <div className="bg-overlay"></div>
            <Container>
                <Row>
                    <Col lg={{size :8, offset:2}} className="text-center">
                        <h1 className="get-started-title text-white">We are passionate about what we do.</h1>
                        <div className="section-title-border margin-t-20 bg-white"></div>
                        <p className="section-subtitle font-secondary text-white text-center padding-t-30">Cape d’Or Sustainable Seafoods Inc. is committed to transforming the aquaculture industry into an environmentally safe and sustainable business. We care deeply about our industry and are proud to provide financially rewarding jobs for rural Atlantic Canadians.</p>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default GetStarted;
