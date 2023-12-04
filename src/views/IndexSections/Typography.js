
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Typography() {
  return (
    <div className="section section-typo">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path3.png")}
      />
      <Container>
        <h3 className="title">Program ที่ใช้</h3>
        <br></br>
        <div id="typography">
          <Row>
            <Col md="12">

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Visual Studio Cod"
                    className="img-fluid rounded shadow"
                    src="https://img.icons8.com/?size=512&id=XCNhMfBsqfX1&format=png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Visual Studio Code</span>
                </span>
                <p className="text-info" style={{ marginLeft: "50px" }}>
                  ใช้ในการพัมนาเว็บไซต์และโปรแกรมเป็นหลัก โดยรองรับทุกภาษาโปรแกรมมิ่ง และมีส่วนเสริมให้ใช้งานมากมาย
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="pycharm"
                    className="img-fluid rounded shadow"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pycharm-icon.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>pycharm</span>
                </span>
                <p className="text-primary" style={{ marginLeft: "50px" }}>
                ใช้พัฒนาโปรแกรมภาษา Python เป็นหลัก แต่ก็สามารถพัฒนาภาษาโปรแกรมมิ่งอื่นๆ ได้เหมือนกับ
                Visual Studio Code เชนเดียวกัน
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Github"
                    className="img-fluid rounded shadow"
                    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Github</span>
                </span>
                <p className="text-info" style={{ marginLeft: "50px" }}>
                  ใช้ในการรวบรวม บันทึก ผลงานหรือโปนเจคที่เกี่ยวข้องกับการพัฒนาโปรแกรมเป็นหลัก
                  และสามารถดาวน์โหลดโค้ดต่างๆมาใช้งานได้อีก
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Google Chome"
                    className="img-fluid rounded shadow"
                    src="https://img.icons8.com/?size=512&id=63785&format=png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Google Chome</span>
                </span>
                <p className="text-success" style={{ marginLeft: "50px" }}>
                  ใช้ในการรันโปรเจคที่เป็นการพัฒนาเว็บไซต์ เพื่อดูผลลัพธ์ 
                  และใช้ในการท่องเว็บไซต์ต่างๆ
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="MongoDB"
                    className="img-fluid rounded shadow"
                    src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>MongoDB</span>
                </span>
                <p className="text-warning" style={{ marginLeft: "50px" }}>
                  เป็นฐานข้อมูลสำหรับภาษาฐานข้อมูล NoSQL และตัวจำลองเซิร์ฟเวอร์ของโปรเจคที่ใช้ NoSQL
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="MySql"
                    className="img-fluid rounded shadow"
                    src="https://camo.githubusercontent.com/f85f882cb31eeaeee657ec955313015c30378e8f56c3dc2f06933b617a276cfd/68747470733a2f2f77372e706e6777696e672e636f6d2f706e67732f3734372f3739382f706e672d7472616e73706172656e742d6d7973716c2d6c6f676f2d6d7973716c2d64617461626173652d7765622d646576656c6f706d656e742d636f6d70757465722d736f6674776172652d646f6c7068696e2d6d6172696e652d6d616d6d616c2d616e696d616c732d746578742d7468756d626e61696c2e706e67"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>MySql</span>
                </span>
                <p className="text-success" style={{ marginLeft: "50px" }}>
                เป็นฐานข้อมูลสำหรับภาษาฐานข้อมูล SQL และตัวจำลองเซิร์ฟเวอร์ของโปรเจคที่ใช้ MySQL
                รองรับการทำงานที่หลากหลาย และทำงานร่วมกับ Oracle ได้
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="XAMPP"
                    className="img-fluid rounded shadow"
                    src="https://cdn2.iconfinder.com/data/icons/pack1-baco-flurry-icons-style/512/XAMPP.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>XAMPP</span>
                </span>
                <p className="text-warning" style={{ marginLeft: "50px" }}>
                  เป็นจำลองเซิร์ฟเวอร์ที่รองรับ ภาษา PHP , SQL ใช้งานง่าย แต่อาจจะยุ่งยาก
                  ในช่วงการติดตั้งเล็กน้อย
                </p>
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
}
