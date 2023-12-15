
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">ข้อมูลส่วนตัว
            <hr className="line-success" style={{ width: '150px', marginTop: '20px' }} />
          </h3>
          <br></br>
          <div class="container-fluid">
            <Row >
              <Col lg={4} md={4} >
                <div className="text-lift">
                  <p><i class="tim-icons icon-badge"></i>&nbsp; &nbsp; ชื่อ  : นายสหรัฐ สุวรรณภาพร</p>
                  <p><i class="tim-icons icon-link-72"></i>&nbsp; &nbsp; เชื้อชาติ : ไทย </p>
                </div>
              </Col>

              <Col lg={4} md={4} >
                <div className="text-lift">
                  <p><i class="tim-icons icon-pencil"></i>&nbsp; &nbsp; ชื่อเล่น : รุส</p>
                  <p><i class="tim-icons icon-caps-small"></i>&nbsp; &nbsp; สัญชาติ : ไทย</p>
                </div>
              </Col>

              <Col lg={4} md={4} >
                <div className="text-lift">
                  <p><i class="tim-icons icon-calendar-60"></i>&nbsp; &nbsp; วันเกิด : 12/06/1997</p>
                  <p><i class="tim-icons icon-satisfied"></i>&nbsp; &nbsp; ศาสนา : อิสลาม</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <br></br>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <h5 className="text-uppercase font-weight-bold">
                การศึกษา : ระดับมัธยมตอนปลาย
              </h5>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1,
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bulb-63" />
                      โรงเรียน
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2,
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-molecule-40" />
                      สาขา
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3,
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-paper" />
                      เกรด
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      โรงเรียนกำแพงวิทยา
                    </p>
                  </TabPane>
                  <TabPane tabId="link2">
                    <p>
                      ศิลป์ภาษาจีน
                    </p>
                  </TabPane>
                  <TabPane tabId="link3">
                    <p>
                      GPAX : 2.11
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <h5 className="text-uppercase font-weight-bold">
                การศึกษา : ระดับปริญญาบัณฑิต
              </h5>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4,
                      })}
                      onClick={(e) => setTextTabs(4)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bulb-63" />
                      มหาวิทยาลัย
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5,
                      })}
                      onClick={(e) => setTextTabs(5)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-molecule-40" />
                      สาขา
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6,
                      })}
                      onClick={(e) => setTextTabs(6)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-paper" />
                      เกรด
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                      มหาวิทยาลัยวลัยลักษณ์
                    </p>
                  </TabPane>
                  <TabPane tabId="link5">
                    <p>
                      เทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล
                    </p>
                  </TabPane>
                  <TabPane tabId="link6">
                    <p>
                      GPAX : 3.17
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
