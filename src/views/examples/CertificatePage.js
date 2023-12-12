
import React from "react";
// react plugin used to create charts
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <Container>
          <h1
            style={{ margin: '150px' }}
            className="text-center">
            Your best benefit
          </h1>
          <Row>
            <Col md="6">
                <img
                  alt="..."
                  className="path1"
                  src={require("assets/img/bs/bs2.jpg")}
                />
                <hr className="line-primary" />
                <p>
                  Divide details about your work into parts. Write a few
                  lines about each one. A paragraph describing a feature
                  will.
                </p>
            </Col>

            <Col md="6">
                <img
                  alt="..."
                  className="path1"
                  src={require("assets/img/bs/bs1.png")}
                />
                <hr className="line-warning" />
                <p>
                  Divide details about your product or agency work into
                  parts. Write a few lines about each one. A paragraph
                  describing feature will be a feature.
                </p>
            </Col>
          </Row>
          
        </Container>

        <br />
        <br />
        <br />

        <Footer />
      </div>
    </>
  );
}
