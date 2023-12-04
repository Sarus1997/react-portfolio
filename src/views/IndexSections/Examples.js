
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/other/ip15.webp")}
              />
            <h3
            style={{marginTop: '20px'}}
            >
              สิ่งที่สนใจ
            </h3>
          </Col>
          <Col sm="6">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/other/557.jpg")}
              />
            <h3
            style={{marginTop: '20px'}}
            >
              สิ่งที่สนใจ
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
