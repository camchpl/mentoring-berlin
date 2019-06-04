import React, { Component } from "react";
import Popup from "reactjs-popup";
import { Link, withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import AuthService from "./auth/auth-service";

class ModalLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", error: false, modalOpen: false };
    this.service = new AuthService();
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.documentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.documentClick, false);
  }

  documentClick = e => {
    if (!this.node || this.node.contains(e.target)) {
      return;
    }
    this.setState({ modalOpen: false });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    this.service
      .login(email, password)
      .then(response => {
        console.log(response);
        this.setState({ email: "", password: "", modalOpen: false });
        this.props.getUser(response);
        // this.props.history.push("/");
        // console.log("YES")
        // console.log(this.props.history);
      })
      .catch(error => {
        this.setState({ error: true });
        console.log("NO");
        console.log(error);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleButtonClick = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    return (
      <span>
        <Popup modal open={this.state.modalOpen} closeOnDocumentClick={false}>
          <div
            ref={node => (this.node = node)}
            className="container login-container"
          >
            <div className="row">
              <div className="col-3" />
              <div className="col-6">
                <Form onSubmit={this.handleFormSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      size="sm"
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      size="sm"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={e => this.handleChange(e)}
                    />
                  </Form.Group>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </Form>
                <hr />
                {this.state.error ? (
                  <p className="error-message">
                    {/* {content.errorMessage.errorMessage}! */}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-3" />
            </div>
            <p className="login-message">
              Dont have account? Please{" "}
              <Link to={"/sšgnup"}> signup on the homepage</Link>
              <br />
              Forgot your password? ... Sorry about that !
            </p>
          </div>
        </Popup>
        {/* <NavItem className=""> */}
        <Link to="#" onClick={this.handleButtonClick}>
          Login
        </Link>
        {/* </NavItem> */}
      </span>
    );
  }
}

export default withRouter(ModalLogin);
