
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
        <br />
        <Container>
          <h1
            style={{ margin: '100px' }}
            className="text-center">
            ใบรับรอง
            <hr className="line-success"
            style={{width:'40%',margin:'0 auto'}}
            />
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
                <a href="https://mooc.chula.ac.th/">https://mooc.chula.ac.th/</a>
                </p>
                <br />
            </Col>

            <Col md="6">
                <img
                  alt="..."
                  className="path1"
                  src={require("assets/img/bs/bs1.png")}
                />
                <hr className="line-warning" />
                <p>
                <a href="https://elearning.set.or.th/">https://elearning.set.or.th/</a>
                </p>
                <br />
            </Col>
          </Row>
          
          <Row>
            <Col md="6">
                <img
                  alt="..."
                  className="path1"
                  src={require("assets/img/bs/bs3.jpg")}
                />
                <hr className="line-primary" />
                <p>
                <a href="https://mooc.chula.ac.th/">https://mooc.chula.ac.th/</a>
                </p>
                <br />
            </Col>

            <Col md="6">
                <img
                  alt="..."
                  className="path1"
                  src={require("assets/img/bs/bs4.jpg")}
                />
                <hr className="line-warning" />
                <p>
                <a href="https://mooc.chula.ac.th/">https://mooc.chula.ac.th/</a>
                </p>
                <br />
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
