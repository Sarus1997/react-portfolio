
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <h1>สิ่งที่สนใจ
          <hr className="line-success" style={{ width: '200px', margin: '0 auto' }} />
        </h1>
        <Row>
          <Col sm="4">
            <img
              alt="..."
              style={{ width: '180px', height: '120px' }}
              className="img-raised"
              src={require("assets/img/other/react.gif")}
            />
            <h3
              style={{ marginTop: '20px' }}
            >
              React.Js
            </h3>
          </Col>
          <Col sm="4">
            <img
              alt="..."
              style={{ width: '180px', height: '120px' }}
              className="img-raised"
              src={require("assets/img/other/vue.gif")}
            />
            <h3
              style={{ marginTop: '20px' }}
            >
              Vue.Js
            </h3>
          </Col>

          <Col sm="4">
            <img
              alt="..."
              style={{ width: '180px', height: '120px' }}
              className="img-raised"
              src={require("assets/img/other/angular.gif")}
            />
            <h3
              style={{ marginTop: '20px' }}
            >
              Angular
            </h3>
          </Col>
        </Row>
        <br />
          <br />
        <div className='container-fluid'>
          <img
            alt="..."
            
            className="img-raised"
            src={require("assets/img/Night-Coding.gif")}
          />
        </div>
      </Container>
    </div>
  );
}
