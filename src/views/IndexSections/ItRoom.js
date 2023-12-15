import React from "react";
// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";

const ImglItems = [
    {
        id: '1',
        src: require("assets/img/it-room/it1.png"),
        caption: "ผังองค์กรแผนกไอที",
    },
    {
        id: '2',
        src: require("assets/img/it-room/it2.png"),
        caption: "ผังองค์กรแผนกไอที",
    },
    {
        id: '3',
        src: require("assets/img/it-room/it3.png"),
        caption: "ผังองค์กรแผนกไอที",
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
                            <Container>
                                <Row>
                                    <Col sm="6">
                                        {ImglItems.map((item, index) => (
                                            item.id === '1' && (
                                                <div key={index}>
                                                    <img src={item.src} alt={item.caption} style={{ width: '220px' }} />
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
                                                    <img src={item.src} alt={item.caption} style={{ width: '220px' }} />
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
                                                    <img src={item.src} alt={item.caption} style={{ width: '220px' }} />
                                                    <h6 style={{ marginTop: '20px' }}>
                                                        {item.caption}
                                                    </h6>
                                                    <hr className="line-primary" style={{ width: '150px', marginTop: '20px' }} />
                                                </div>
                                            )
                                        ))}
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}