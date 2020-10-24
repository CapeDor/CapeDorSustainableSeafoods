import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class FooterLinks extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-alt">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="float-left pull-none">
                                    <p className="copy-rights text-muted mb-3 mb-sm-0">© Cape d'Or Sustainable Seafoods Inc.</p>
                                </div>
                                <div className="clearfix"></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default FooterLinks;
