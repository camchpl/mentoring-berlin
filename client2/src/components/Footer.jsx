import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 background-footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3" />
          <MDBCol md="3">
            <h5 className="title">Support</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Contact us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Legal</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms of use</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Company</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Careers</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Press</a>
              </li>
            </ul>
            <div className="footer-copyright">© 2019 - Made in Berlin</div>
          </MDBCol>
          <MDBCol md="3" />
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
