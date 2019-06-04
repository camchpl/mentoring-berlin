import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "./auth-service";
import { Alert } from "reactstrap";
import { Container, Row, Card, CardBody, Col } from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      redirect: false,
      errorMessage: ""
    };
    this.service = new AuthService();
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { username, password, email } = this.state;
    this.service
      .signup(username, password, email)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          firstname: "",
          lastname: "",
          email: ""
        });
        this.props.setUser(response);
        this.setRedirect();
      })
      .catch(error => {
        console.log(error.response);
        this.setState({ errorMessage: error.response.data.message });
        console.log(error);
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Container>
          <Row className="mt-3 text-center">
            <Col>
              <Card className="shadow flex-row">
                <CardBody>
                  <h2>Create your account</h2>
                  <form
                    className="form-signin"
                    onSubmit={this.handleFormSubmit}
                  >
                    <div className="form-group">
                      <label>First name:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        value={this.state.firstname}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Last name:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Username:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.handleChange(e)}
                      />
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                  <hr />
                  {this.state.errorMessage && (
                    <Alert color="warning">{this.state.errorMessage}</Alert>
                  )}
                  <p>
                    Already have an account? <br />
                    <Link to={"/login"}>Login</Link>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Signup;
