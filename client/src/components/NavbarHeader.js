import AuthService from "./auth/auth-service";
import Image from "react-bootstrap/Image";
import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";

export default class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, loggedInButton: "Login" };
    this.service = new AuthService();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-style" light expand="md">
          <Link to="/">
            {" "}
            <Image src="/images/viragos.png" />{" "}
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.loggedInUser ? (
                <React.Fragment>
                  <NavItem className="active link-navbar">
                    <Link to="/designers-profile"> Designers </Link>
                  </NavItem>
                  <NavItem className="active link-navbar">
                    <Link to="/manufacturers-private"> Manufacturers </Link>
                  </NavItem>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavItem className="active link-navbar">
                    <Link to="/designers">Designers</Link>
                  </NavItem>
                  <NavItem className="active link-navbar">
                    <Link to="/manufacturers">Manufacturers</Link>
                  </NavItem>
                </React.Fragment>
              )}

              <NavItem className="active link-navbar">
                <Link to="/concept">Concept</Link>
              </NavItem>

              <NavItem className="active link-navbar">
                {this.state.loggedInUser && (
                  <Link to="/profile"> Profile </Link>
                )}
                {this.state.loggedInUser ? (
                  <Link
                    className="active link-navbar"
                    onClick={() => this.logoutUser()}
                    to="/logout"
                  >
                    {" "}
                    Logout{" "}
                  </Link>
                ) : (
                  <ModalLogin getUser={this.props.getUser} />
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarHeader;
