import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section" id="features">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="5" className="order-2 order-lg-1">
                                <div className="features-box mt-5 mt-lg-0">
                                    <h3>Our fish make the perfect dish for any occasion.</h3>
                                    <p className="text-muted web-desc">Our award winning Cape d'Or Salmon is recognized the world over for its succulent taste, wonderful color, and incredible freshness. A combination of factors results in an incredibly tasty, high quality fish that is unparalleled in today's market.</p>
                                    <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                        <li className="">We raise Cape d'Or Salmon from the egg, providing the ability to maintain quality through every stage of fish growth.</li>
                                        <li className="">Cape d'Or Salmon is raised in a state-of-the-art saltwater recirculation aquaculture system, to minimize environmental impact while maximizing fish quality.</li>
                                        <li className="">A custom organic diet was developed for Cape d'Or Salmon to promote better fish health and allow for a fully organic product.</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={{size: 7, order: 2, }} xs={{order : 1}}>
                                <div className="features-img mx-auto mr-lg-0">
                                    <img src="assets/images/salmon.png" alt="salmon" className="img-fluid rounded" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;
