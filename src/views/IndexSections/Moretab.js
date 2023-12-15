
import React from "react";
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Container,
  Button,
} from "reactstrap";

export default function Tabs() {
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">ใบรับรองและข้อมูลส่วนตัว
            <hr className="line-primary" style={{ width: '150px', marginTop: '20px' }} />
          </h3>
          <p>ดูข้อมูลการอบอม หรือการเรียนรู้ต่างๆ และข้อมูลส่วนตัว</p>
        </div>
        <Link to="/certificate-page" className="mt-4">
          <Button color="danger">
            <i className="fab fa-certificate">&nbsp;</i>
            รวมใบรับรอง
          </Button>
        </Link>

        <Link to="/profile-page" className="mt-4">
          <Button color="success">
            <i className="fab fa-certificate">&nbsp;</i>
            ข้อมูลส่วนตัว
          </Button>
        </Link>
      </Container>

      <Container>
        <div className="title">
          <h3 className="mb-3">ข้อมูลอื่นๆ
            <hr className="line-warning" style={{ width: '150px', marginTop: '20px' }} />
          </h3>
          <p>ดูข้อมูลการเขียนโปรแกรมในภาษาต่างๆ ได้ทาง <strong>codeium.com</strong></p>
        </div>
        <Button className="mt-4" color="warning" href="https://codeium.com/profile/sarus">
          <i className="fab fa-user">&nbsp;</i>
          คลิก
        </Button>

        <div className='container-fluid'>
          <br />
          <br />
          <img
            alt="..."
            style={{width:'100%'}}
            className="img-raised"
            src={require("assets/img/hack.gif")}
          />
        </div>
      </Container>
    </div>
  );
}
