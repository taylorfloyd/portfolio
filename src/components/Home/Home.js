import React from "react";
import './Home.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { scroller} from "react-scroll";

export default function Home() {
  return (
    <div className="Home" id="home" href="#home">
        <Container fluid>
            <Row className="Row">
                <Col >
                <h1 className="Title">Taylor Floyd</h1>
                <p className="Subtitle">Software Developer</p>
                <Button
                variant="light"
                onClick={() => {
                  scroller.scrollTo("about", {
                  smooth: true,
                  // offset: -70,
                  duration: 500,
                  });
                }}
                >About Me</Button>
                </Col>
                <Col />
                {/* <Col /> */}
            </Row>
        </Container>
    </div>
  );
}