
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
            <h3 className="mb-5">Tools and Languages
            <hr className="line-success" style={{width:'150px',marginTop:'20px'}}/>
            </h3>
            <Nav className="nav-pills-info nav-pills-icons" pills>
              <NavItem>
                <NavLink 
                  className={classnames({
                    "active show": pills === 1,
                  })}
                  onClick={(e) => setPills(1)}
                  href="#pablo"
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="HTML5"
                  src="https://img.icons8.com/?size=512&id=20909&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="CSS3"
                  src="https://img.icons8.com/?size=512&id=5cVdiiKKi0vX&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="JavaScript"
                  src="https://img.icons8.com/?size=96&id=RwtOBojoLS2N&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Node.js"
                  src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="NoSql"
                  src="https://img.icons8.com/?size=512&id=74402&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Sql"
                  src="https://img.icons8.com/?size=512&id=59952&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Vue.js"
                  src="https://img.icons8.com/?size=512&id=rY6agKizO9eb&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="React.js"
                  src="https://img.icons8.com/?size=512&id=wPohyHO_qO1a&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Laravel"
                  src="https://img.icons8.com/?size=512&id=lRjcvhvtR81o&format=png"
                  style={{ height: "50px", width:"60px" }}
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
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Python"
                  src="https://img.icons8.com/?size=512&id=121464&format=png"
                  style={{ height: "50px", width:"60px" }}
                />
                <br></br>
                <br></br>
                  Python
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 10,
                  })}
                  onClick={(e) => setPills(10)}
                  href="#pablo"
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Bootstrap"
                  src="https://camo.githubusercontent.com/2512b49c89512f2ff3718f7257f48ed5c46a4e331abbd890b6c5e8c0e458434f/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
                  style={{ height: "50px", width:"60px" }}
                />
                <br></br>
                <br></br>
                  Bootstrap
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 10,
                  })}
                  onClick={(e) => setPills(10)}
                  href="#pablo"
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Git"
                  src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                  style={{ height: "50px", width:"60px" }}
                />
                <br></br>
                <br></br>
                  Git
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 10,
                  })}
                  onClick={(e) => setPills(10)}
                  href="#pablo"
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="SweetAlert2"
                  src="https://rohit-chouhan.gallerycdn.vsassets.io/extensions/rohit-chouhan/sweetalert2-snippet/1.1.2/1625627316335/Microsoft.VisualStudio.Services.Icons.Default"
                  style={{ height: "50px", width:"60px" }}
                />
                <br></br>
                <br></br>
                SweetAlert2
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 10,
                  })}
                  onClick={(e) => setPills(10)}
                  href="#pablo"
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="Vanta.js"
                  src="https://www.bypeople.com/wp-content/uploads/2019/12/free-webgl-3d-background-tool.png"
                  style={{ height: "50px", width:"60px" }}
                />
                <br></br>
                <br></br>
                Vanta.js
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={classnames({
                    "active show": pills === 10,
                  })}
                  onClick={(e) => setPills(10)}
                  href="#pablo"
                  style={{ fontSize: "10px" }}
                >
                  <br></br>
                  <img
                  alt="NPM"
                  src="https://static-00.iconduck.com/assets.00/npm-icon-512x512-qtfdrf37.png"
                  style={{ height: "50px", width:"60px" }}
                />
                <br></br>
                <br></br>
                NPM
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
