import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
    state = {
        services : [
            { title : "Closed Containment", icon : "pe-7s-lock", description : "We make sure what comes in doesn't go out. Because we are a land-based our facility has 0% risk of fish escaping to rivers and oceans." },
            { title : "Land-Based", icon : "pe-7s-map", description : "Our land-based facility provides security for the fish while minimizing our environmental impact." },
            { title : "Biosecure Seawater Wells", icon : "pe-7s-drop", description : "All of our water comes from biosecure seawater wells and is naturally filtered underground through 600 feet of gravel before being pumped into the facility." },
            { title : "Support Local", icon : "pe-7s-map-marker", description : "We provide jobs to rural seacoast Nova Scotians while supporting local and small businesses." },
            { title : "Naturally Raised", icon : "pe-7s-leaf", description : "Our fish are antibiotic, parasiticide, hormone, and GMO free. Our feed is organic and made with local fish meal with no avian or land animal byproducts" },
            { title : "Certified Organic", icon : "pe-7s-portfolio", description : "Certified organic by Pro-Cert - a leading provider third-party certification. We now offer a 100% organic product." },
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <Container>

                        {/* Render section title */}
                        <SectionTitle title="Fresh, Delicious, Sustainably Raised"/>

                        <Row className="margin-t-10">
                            {/* render service box */}
                            {
                                this.state.services.map((service) =>
                                    <ServiceBox title={service.title} icon={service.icon} description={service.description} />
                                )
                            }
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Services;
