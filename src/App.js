import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import { Link} from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar className="Center-navbar" bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">TAYLOR FLOYD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" defaultActiveKey="#home" > 
            <li className="nav-item">
              <Link
                href="#home"
                to="home"
                activeClass="active"
                className="nav-link"
                hashSpy={true}
                spy={true}
                smooth={true}
                duration={500}
                >
                Home
              </Link>
            </li>
              {/* <Nav.Link
                href="#home"
                onClick={() => {
                  scroller.scrollTo("home", {
                  // activeClass: "active",
                  smooth: true,
                  spy: true,
                  // offset: -70,
                  duration: 500,
                  });
                }}
                >
                Home
              </Nav.Link> */}
              <li className="nav-item">
                <Link
                  href="#about"
                  to="about"
                  activeClass="active"
                  className="nav-link"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  duration={500}
                  >
                  About
                </Link>
              </li>
              {/* <Nav.Link
                href="#about"
                onClick={() => {
                  scroller.scrollTo("about", {
                  // activeClass: "active",
                  smooth: true,
                  spy: true,
                  // offset: -70,
                  duration: 500,
                  });
                }}
                >
                About
              </Nav.Link> */}
              <li className="nav-item">
                <Link
                  href="#resume"
                  to="resume"
                  activeClass="active"
                  className="nav-link"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  duration={500}
                  >
                  Resume
                </Link>
              </li>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Software Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Technical Writing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;
