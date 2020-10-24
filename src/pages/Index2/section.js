import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";


class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this);
    }

    callModal = () => {
        this.refs.child.openModal();
    }

    render() {


        return (
            <React.Fragment>
                <section className="section bg-home home-half" id="home">
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row>
                            <Col lg={{size : 8, offset : 2}} className="text-white text-center">
                                <h4 className="home-small-title padding-t-100"></h4>
                                <h1 className="home-title">A leader in recirculating land-based salmon farms.</h1>
                                <p className="padding-t-15 home-desc mx-auto padding-b-115">Based in Atlantic Canada, we deliver a high quality product that is incredibly flavourful and environmentally safe.</p>
                            </Col>
                        </Row>
                    </Container>
                    <div className="wave-effect wave-anim">
                        <div className="waves-shape shape-one">
                            <div className="wave wave-one" style={{ backgroundImage :`url(assets/images/wave-shape/wave1.png)`  }}></div>
                        </div>
                        <div className="waves-shape shape-two">
                            <div className="wave wave-two" style={{ backgroundImage :`url(assets/images/wave-shape/wave2.png)`  }}></div>
                        </div>
                        <div className="waves-shape shape-three">
                            <div className="wave wave-three" style={{ backgroundImage :`url(assets/images/wave-shape/wave3.png)`  }}></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
