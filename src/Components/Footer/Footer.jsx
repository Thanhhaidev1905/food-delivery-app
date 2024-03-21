import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../Style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo_footer text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                tempora eaque sunt consequatur
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4 className="footer_title">Delivery Time</h4>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h4 className="footer_title">Contact</h4>
            <ListGroup className="delivery_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <p>Location: Ho Chi Minh city</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Phone: 0876797276</span>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Email: fastdeliveyfood@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-fill"></i>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
