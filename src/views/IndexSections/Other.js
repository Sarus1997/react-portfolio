import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const ImglItems = [
  {
    id: '1',
    src: require("assets/img/project/pj-01.png"),
    caption: "Web Story Online",
  },
  {
    id: '2',
    src: require("assets/img/project/pj-02.png"),
    caption: "Web Story Online",
  },
  {
    id: '3',
    src: require("assets/img/project/pj-03.png"),
    caption: "Web Story Online",
  }
];

const ImgProject = [
  {
    id: '1',
    src: require("assets/img/final-pj/final-01.png"),
    caption: "Final Project",
  },
  {
    id: '2',
    src: require("assets/img/final-pj/final-02.png"),
    caption: "Final Project",
  },
  {
    id: '3',
    src: require("assets/img/final-pj/final-03.png"),
    caption: "Final Project",
  },
  {
    id: '4',
    src: require("assets/img/final-pj/final-04.png"),
    caption: "Final Project",
  },
  {
    id: '5',
    src: require("assets/img/final-pj/final-05.png"),
    caption: "Final Project",
  },
  {
    id: '6',
    src: require("assets/img/final-pj/final-06.png"),
    caption: "Final Project",
  },
  {
    id: '7',
    src: require("assets/img/final-pj/final-07.png"),
    caption: "Final Project",
  },
  {
    id: '8',
    src: require("assets/img/final-pj/final-08.png"),
    caption: "Final Project",
  },
  {
    id: '9',
    src: require("assets/img/final-pj/final-09.png"),
    caption: "Final Project",
  },
  {
    id: '10',
    src: require("assets/img/final-pj/final-10.png"),
    caption: "Final Project",
  },
  {
    id: '11',
    src: require("assets/img/final-pj/final-11.png"),
    caption: "Final Project",
  },
  {
    id: '12',
    src: require("assets/img/final-pj/final-12.png"),
    caption: "Final Project",
  },
  {
    id: '13',
    src: require("assets/img/final-pj/final-13.png"),
    caption: "Final Project",
  },
  {
    id: '14',
    src: require("assets/img/final-pj/final-14.png"),
    caption: "Final Project",
  }
];



export default function Signup() {
  return (
    <div className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          <Col>
            <h3 className="display-3 text-white">
              โปรเจกต์ที่ได้ทำระหว่างเรียน
            </h3>
            <p className="text-white mb-3">
              โปรเจกต์ที่ได้ทำระหว่างเรียน ซึ่งได้ใช้ทั้ง Html 5 , Css3 , JavaScript , Bootstrap เป็นพื้นฐานสำคัญ
            </p>
            <div className="btn-wrapper">
              <Row>
                <Col sm="6">
                  {ImglItems.map((item, index) => (
                    item.id === '1' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-primary" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>

                <Col sm="6">
                  {ImglItems.map((item, index) => (
                    item.id === '2' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-primary" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>
              </Row>

              <Row>
                <Col sm="6">
                  {ImglItems.map((item, index) => (
                    item.id === '3' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-primary" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>
              </Row>

              <br />
              <hr
                style={{
                  borderWidth: '0.5px',
                  borderColor: '#B244B5',
                  width: '100%'
                }} />

              {/* final projection */}

              <Row>
                {/* 1 */}
                <Col sm="4">
                  {ImgProject.map((item, index) => (
                    item.id === '1' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>

                {/* 2 */}
                <Col sm="4">
                  {ImgProject.map((item, index) => (
                    item.id === '2' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>

                {/* 3 */}
                <Col sm="4">
                  {ImgProject.map((item, index) => (
                    item.id === '3' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>
              </Row>


              <Row>
                {/* 9 */}
                <Col sm="4">
                  {ImgProject.map((item, index) => (
                    item.id === '9' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>

                {/* 10 */}
                <Col sm="4">
                  {ImgProject.map((item, index) => (
                    item.id === '10' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>

                {/* 13 */}
                <Col sm="4">
                  {ImgProject.map((item, index) => (
                    item.id === '13' && (
                      <div key={index}>
                        <img src={item.src} alt={item.caption} style={{ width: '100%' }} />
                        <h6 style={{ marginTop: '20px' }}>
                          {item.caption}
                        </h6>
                        <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
                      </div>
                    )
                  ))}
                </Col>
              </Row>

              <Button className="mt-4" color="primary" href="https://github.com/Sarus1997">
                <i className="fab fa-github">&nbsp;</i>
                ผลงานอื่นๆ
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}