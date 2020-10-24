import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse,
} from "reactstrap";
import ScrollspyNav from "./scrollSpy";

//Import Stickey Header
import StickyHeader from 'react-sticky-header';
import '../../../node_modules/react-sticky-header/styles.css';

class Navbar_Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 2 , idnm : "features", navheading: "Product" },
                { id: 3 , idnm : "services", navheading: "About" },
                { id: 4 , idnm : "contact", navheading: "Contact" },
                ],
            isOpenMenu :false
        };
    }

    toggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }

    render() {
        //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
        let TargetId = this.state.navItems.map((item) => {
            return(
                item.idnm
            )
        });

        return (
            <React.Fragment>
                <StickyHeader

                    header = {
                        <Navbar expand="lg" fixed="top" className={ this.props.navClass + " navbar-custom sticky sticky-dark"}>
                            <Container>
                                <NavbarBrand className="logo" href="/">
                                    <img src="assets/images/header.png" alt="Logo"></img>
                                </NavbarBrand>

                                <NavbarToggler className="p-0" onClick={this.toggle} ><i className="mdi mdi-menu"></i></NavbarToggler>

                                <Collapse id="navbarCollapse" isOpen={this.state.isOpenMenu} navbar>
                                    <ScrollspyNav
                                        scrollTargetIds={TargetId}
                                        activeNavClass="active"
                                        scrollDuration="800"
                                        headerBackground="true"
                                        className="ml-auto"
                                    >
                                        <Nav className="navbar-nav" id="mySidenav">
                                            {this.state.navItems.map((item) => (
                                                <NavItem className={item.navheading === "Home" ? "active" : "" }>
                                                    <NavLink href={"#" + item.idnm} > {item.navheading}</NavLink>
                                                </NavItem>
                                            ))}
                                        </Nav>
                                    </ScrollspyNav>
                                </Collapse>
                            </Container>
                        </Navbar>
                    }
                    stickyOffset = {-100}
                >
                </StickyHeader>
            </React.Fragment>
        );
    }
}

export default Navbar_Page;
