
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
        <h3 className="title">Program
        <hr className="line-success" style={{width:'150px',marginTop:'20px'}}/>
        </h3>
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
                  <span style={{ marginLeft: "50px" }}>VS Code</span>
                </span>
                <p className="text-info" style={{ marginLeft: "50px" }}>
                  ใช้ในการพัมนาเว็บไซต์ รองรับทุกภาษาในการพัฒนา
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
                ใช้พัฒนาโปรแกรมภาษา Python เป็นหลัก แต่ก็สามารถใช่กับภาษาอื่นๆได้เช่นเดียวกัน
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
                <p className="text-danger" style={{ marginLeft: "50px" }}>
                  ใช้ในการรวบรวม จัดเก็บ ผลงานต่างๆ และโปรเจกต์ที่ได้ทำ
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
                <p className="text-info" style={{ marginLeft: "50px" }}>
                เป็นฐานข้อมูลสำหรับภาษาฐานข้อมูล SQL และตัวจำลองเซิร์ฟเวอร์ของโปรเจคที่ใช้ MySQL
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
                <p className="text-primary" style={{ marginLeft: "50px" }}>
                  เป็นตัวจำลองเซิร์ฟเวอร์ที่เป็นฐานข้อมูลภาษา Sql
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Adoeb Premier Pro"
                    className="img-fluid rounded shadow"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/2101px-Adobe_Premiere_Pro_CC_icon.svg.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Premier Pro</span>
                </span>
                <p className="text-danger" style={{ marginLeft: "50px" }}>
                  ใช้สำหรับการตัดต่อวิดีโอ แยกเสียง ลบเสียง และเอฟเฟคต่างๆ
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Canva"
                    className="img-fluid rounded shadow"
                    src="https://freelogopng.com/images/all_img/1656733637logo-canva-png.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Canva</span>
                </span>
                <p className="text-warning" style={{ marginLeft: "50px" }}>
                  ทำพรีเซนเทชั่น และงานเอกสารต่างๆ รวมไปถึงการตกแต่งรูปภาพ
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Sourcetree"
                    className="img-fluid rounded shadow"
                    src="https://static-00.iconduck.com/assets.00/sourcetree-icon-407x512-cnpohnjl.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Sourcetree</span>
                </span>
                <p className="text-success" style={{ marginLeft: "50px" }}>
                  เป็นที่ทำงาน และ จัดเก็บโปรเจกต์ ของ bitbucket ฟรี 5 โครงการ มากกว่านั้นต้องเสียเงิน
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Figma"
                    className="img-fluid rounded shadow"
                    src="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Figma</span>
                </span>
                <p className="text-info" style={{ marginLeft: "50px" }}>
                  ออกแบบ UX / UI สำหรับเว็บแอพพลิเคชั่น และ โมบายแอพพลิเคชั่น
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt="Microsoft 365"
                    className="img-fluid rounded shadow"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/1862px-Microsoft_365_%282022%29.svg.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}>Microsoft 365</span>
                </span>
                <p className="text-primary" style={{ marginLeft: "50px" }}>
                  จัดทำเอกสาร พรีเซนเทชั่น และงานวิเคาระห์ข้อมูลต่างๆ
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt=" FL Studio"
                    className="img-fluid rounded shadow"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d7/NicePng_studio-png_1259519.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}> FL Studio</span>
                </span>
                <p className="text-danger" style={{ marginLeft: "50px" }}>
                  ใช้สำหรับการออกแบบดนตรี หรือ สร้างเพลงเป็นของตัวเอง
                </p>
              </div>

              <div className="typography-line">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt=" Power BI"
                    className="img-fluid rounded shadow"
                    src="https://static-00.iconduck.com/assets.00/power-bi-icon-1536x2048-0xah5g2o.png"
                    style={{ height: "35px" }}
                  />
                  <span style={{ marginLeft: "50px" }}> Power BI</span>
                </span>
                <p className="text-success" style={{ marginLeft: "50px" }}>
                  ใช้สำหรับการวิเคราะห์ข้อมูล และการทำ Reports
                </p>
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
}
