import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";


class Clients extends Component {
    state = {
        clients : [
            { id : 1, img : "assets/images/cert/ocean_wise.png" },
            { id : 2, img : "assets/images/cert/organic.png" },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section-sm bg-light">
                    <Container>
                        <Row className="justify-content-center">
                            {
                                this.state.clients.map((client) =>
                                    <Col md="3">
                                        <div className="client-images my-3 my-md-0">
                                            <img src={client.img} alt="logo-img" className="mx-auto img-fluid d-block"/>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Clients;
