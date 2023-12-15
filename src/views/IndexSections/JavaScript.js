
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/portfolio/pce-user.jpg"),
    altText: "Slide 1",
    caption: "ระบบค้นหารายชื่อบุคลากร",
  },
  {
    src: require("assets/img/portfolio/pcm01.jpg"),
    altText: "Slide 2",
    caption: "www.pcmarine1992.com",
  },
  {
    src: require("assets/img/portfolio/pc01.jpg"),
    altText: "Slide 3",
    caption: "www.petchsrivichai.com",
  },
];

export default function JavaScript() {
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img alt="..." className="path" src={require("assets/img/path5.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <div className="section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
              ผลงานที่ได้ทำ
              <hr className="line-success" style={{width:'150px',marginTop:'20px'}}/>
              </h1>
              <p className="text-white mt-4">
              เป็นผลงานที่ได้ทำในช่วงที่ได้สหกิจศึกษา 8 เดือน
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://github.com/Sarus1997">
                <i className="fab fa-github">&nbsp;</i>
                ผลงานอื่นๆ
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}