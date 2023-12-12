
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <h1>สิ่งที่สนใจ</h1>
        <Row>
          <Col sm="4">
              <img
                alt="..."
                style={{width:'230px', height:'150px'}}
                className="img-raised"
                src={require("assets/img/other/react.gif")}
              />
            <h3
            style={{marginTop: '20px'}}
            >
              React.Js
            </h3>
          </Col>
          <Col sm="4">
              <img
                alt="..."
                style={{width:'230px', height:'150px'}}
                className="img-raised"
                src={require("assets/img/other/vue.gif")}
              />
            <h3
            style={{marginTop: '20px'}}
            >
              Vue.Js
            </h3>
          </Col>

          <Col sm="4">
              <img
                alt="..."
                style={{width:'230px', height:'150px'}}
                className="img-raised"
                src={require("assets/img/other/angular.gif")}
              />
            <h3
            style={{marginTop: '20px'}}
            >
              Angular
            </h3>
          </Col>
        </Row>

      </Container>
    </div>
  );
}
