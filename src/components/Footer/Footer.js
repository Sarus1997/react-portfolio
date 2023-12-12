
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={4} >
            <h3 className="title">REACT•</h3>
            <NavItem>
                <h4><i class="fas fa-info-circle "></i><b>&nbsp;เกี่ยวกับเรา</b></h4>
                <p>รวบรวมผลงาน <br></br>ใช้สำหรับสมัครงานเท่านั้น</p>
              </NavItem>
          </Col>
          <Col lg={4} md={4} >
          <h3 className="title">ช่องทางการติดต่อ :</h3>
              <NavItem>
                <p><i class="fas fa-map-marker-alt"></i>&nbsp;Address : 86 ม.6 ต.นิคมพัฒนา อ.มะนัง จ.สตูล 91130 </p>
              </NavItem>
              <NavItem>
                <p><i class="far fa-envelope"></i>&nbsp;Email :<a href="mailto:Saharat.rus@gmail.com"> Saharat.rus@gmail.com</a></p>
              </NavItem>
              <NavItem>
                <p><i class="fas fa-phone"></i>&nbsp;Tel : <a href="tel:086-9728283">086-9728283</a></p>
              </NavItem>
          </Col>
          <Col lg={4} md={4} >
            <h3 className="title">โปรไฟล์ :</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://instagram.com/sr_sarus/"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.facebook.com/saharat.suwannapapond.7/"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://github.com/Sarus1997"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col lg={12} className="text-center">
            <h3 className="title">แผนที่ :</h3>
            <div className="btn-wrapper profile">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3960.4660914156657!2d99.880845725818!3d6.954216768006583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d6.9541907!2d99.8838718!4m3!3m2!1d6.9541667!2d99.88386109999999!5e0!3m2!1sth!2sth!4v1702349177862!5m2!1sth!2sth"
                width="100%"
                height="350"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
        <Col lg={12} expand="lg" color-on-scroll="100">
            <hr></hr>
            <div className="footer text-center">
              <h4>&copy; Copyright. All Rights Reserved.</h4>
            </div>
          </Col>
    </footer>
  );
}
