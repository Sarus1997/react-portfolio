
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

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


let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">สหรัฐ สุวรรณภาพร</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  การศึกษา : มหาวิทยาลัยวลัยลักษณ์ <br />
                  สาขา : เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล <br />
                  GPAX : 3.17 <br />
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/suwannapapond"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/saharat.suwannapapond.7/"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    href="https://www.instagram.com/sr_sarus/"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://www.youtube.com/@sr_sarus"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      style={{ height: '120px', width: '120px', objectFit: 'cover' }}
                      src={require("assets/img/profile/1997.jpg")}
                    />
                    <h4 className="title">ประวัติโดยย่อ</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          ชื่อ
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          การศึกษา
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          งานอดิเรก
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <tbody>
                            <tr>
                              <td>ชื่อจริง : สหรัฐ สุวรรณภาพร</td>
                            </tr>
                            <tr>
                              <td>ชื่อเล่น : รุส</td>
                            </tr>
                            <tr>
                              <td>ปีเกิด : 12/06/1997</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Table className="tablesorter" responsive>
                          <tbody>
                            <tr>
                              <td>ม.ต้น : โรงเรียนสตูลวิทยา</td>
                            </tr>
                            <tr>
                              <td>ม.ปลาย : โรงเรียนกำแพงวิทยา</td>
                            </tr>
                            <tr>
                              <td>ป.ตรี : มหาวิทยาลัยวลัยลักษณ์</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <tbody>
                            <tr>
                              <td>เล่นเกม</td>
                            </tr>
                            <tr>
                              <td>ศึกษา Coding</td>
                            </tr>
                            <tr>
                              <td>ทำอาหาร</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">โปรเจ็คต์</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                  เป็นผลงานบางส่วนที่ได้ทำระหว่างสหกิจศึกษา
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="https://github.com/Sarus1997"
                  >
                    <i className="fab fa-github" />&nbsp; ผลงานอื่นๆ
                  </Button>

                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="section">
          <Container>
            <h3 className="display-3 text-white">
            ผังองค์กรแผนกไอที
            <hr className="line-primary" style={{ width: '150px', marginTop: '20px' }} />
            </h3>
            <p className="text-white mb-3">
              โปรเจกต์ที่ได้ทำระหว่างสหกิจศึกษา ซึ่งเป็นระบบที่ใช้งานภายในองค์กร
            </p>
            <div className="btn-wrapper">
              <Container>
                <Row>
                  <Col sm="6">
                    {ImglItems.map((item, index) => (
                      item.id === '1' && (
                        <div key={index}>
                          <img src={item.src} alt={item.caption} style={{ width: '250px' }} />
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
                          <img src={item.src} alt={item.caption} style={{ width: '250px' }} />
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
                          <img src={item.src} alt={item.caption} style={{ width: '250px' }} />
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
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">การติดต่อ</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1035.3114623892313!2d99.88367883512409!3d6.954150052573116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTcnMTUuMCJOIDk5wrA1MycwMS45IkU!5e1!3m2!1sth!2sth!4v1701663068386!5m2!1sth!2sth"
                      width="100%"
                      height="270"
                      style={{ border: '0' }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Google Map"
                    >
                    </iframe>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">ที่อยู่</h4>
                    <p>
                      86 ม.6 ต.นิคมพัฒนา <br />
                      อ.มะนัง จ.สตูล 91130 <br />
                      ประเทศไทย
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">ช่องทางการติดต่อ</h4>
                    <p>
                      Email : <a href="mailto:Saharat.rus@gmail.com"> Saharat.rus@gmail.com</a><br />
                      Tel : <a href="tel:086-9728283">086-9728283</a>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
