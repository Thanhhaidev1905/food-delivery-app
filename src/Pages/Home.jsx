import React from "react";
import Helmet from "../Components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";

import "../Style/herosection.css";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero_title">
                  <span>HUNGRY? </span>Just wait <br />
                  food at<span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facilis eveniet accusantium molestias fuga, aut dolor.
                </p>
                <div className="hero_btns d-flex align-items-center gap-5 mt-4 ">
                  <button className="order_btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-wide-line"></i>
                  </button>
                  <button className="seeAll_btn">
                    <Link to="/foods">See all</Link>
                  </button>
                </div>
                <div className="hero_service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-car-line"></i>
                    </span>
                    No shippipng charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping_icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="hero" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
