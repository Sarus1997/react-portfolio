
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function PaginationSection() {
  const [pills, setPills] = React.useState(1);
  return (
    <div className="section section-pagination">
      <img alt="..." className="path" src={require("assets/img/path4.png")} />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png")}
      />
      <Container>
        <Row>
          <Col md="12">
            <h3 className="mb-5">Tools และ languages ที่ใช้</h3>
            <Nav className="nav-pills-info nav-pills-icons" pills>
              <NavItem>
                <NavLink 
                  className={classnames({
                    "active show": pills === 1,
                  })}
                  onClick={(e) => setPills(1)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="HTML5"
                  src="https://img.icons8.com/?size=512&id=20909&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  HTML5
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 2,
                  })}
                  onClick={(e) => setPills(2)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="CSS3"
                  src="https://img.icons8.com/?size=512&id=5cVdiiKKi0vX&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  CSS3
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 3,
                  })}
                  onClick={(e) => setPills(3)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="JavaScript"
                  src="https://img.icons8.com/?size=96&id=RwtOBojoLS2N&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  JavaScript
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 4,
                  })}
                  onClick={(e) => setPills(4)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="Node.js"
                  src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  Node.js
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 5,
                  })}
                  onClick={(e) => setPills(5)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="NoSql"
                  src="https://img.icons8.com/?size=512&id=74402&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  NoSql
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 6,
                  })}
                  onClick={(e) => setPills(6)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="Sql"
                  src="https://img.icons8.com/?size=512&id=59952&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  SQL
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 7,
                  })}
                  onClick={(e) => setPills(7)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="Vue.js"
                  src="https://img.icons8.com/?size=512&id=rY6agKizO9eb&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  Vue.js
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 8,
                  })}
                  onClick={(e) => setPills(8)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="React.js"
                  src="https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  React.js
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 9,
                  })}
                  onClick={(e) => setPills(9)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="Laravel"
                  src="https://img.icons8.com/?size=512&id=lRjcvhvtR81o&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  Laravel
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 10,
                  })}
                  onClick={(e) => setPills(10)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                >
                  <br></br>
                  <img
                  alt="Python"
                  src="https://img.icons8.com/?size=512&id=121464&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  Python
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 12,
                  })}
                  onClick={(e) => setPills(12)}
                  href="#pablo"
                  style={{ fontSize: "14px" }}
                  
                >
                  <br></br>
                  <img
                  alt="Java "
                  src="https://img.icons8.com/?size=512&id=13679&format=png"
                  style={{ height: "70px", width:"70px" }}
                />
                <br></br>
                <br></br>
                  Java
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
