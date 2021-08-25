import React from "react";
import './SoftwareDevelopment.css'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SoftwareDevelopment() {
  return (
    <div className="SoftwareDevelopment" id="portfolio" href="#portfolio">
        <Container >
          <Row className="Row">
              <Col >
                {/* <h1>Programming Portfolio</h1> */}
                <Jumbotron>
                    <h1>Frontend Development</h1>
                    <p>
                        I developed this web application using react.
                    </p>
                    <p>
                        <Button 
                        variant="primary"
                        href="https://github.com/taylorfloyd/portfolio"
                        >Source Code on Github</Button>
                    </p>
                </Jumbotron>
              </Col>
            </Row>
        </Container>
    </div>
  );
}