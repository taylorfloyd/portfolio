import React from "react";
import './SoftwareDevelopment.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SoftwareDevelopment() {
  return (
    <div className="SoftwareDevelopment" id="portfolio" href="#portfolio">
        <Container >
         <Row className="Row-portolio-app-title">
            <Col>
                  <h1>PROGRAMMING PORTFOLIO</h1>
            </Col>
          </Row>          
          <Row className="Row-software-development">
              <Col className="Col-software-development">
                {/* <h1>Programming Portfolio</h1> */}
                <div className="Jumbotron-software-development">
                    <h3>Portfolio Application</h3>
                    <p>
                        I developed this portfolio using React with JavaScript. It showcases my resume, education information, and links to my current projects.
                    </p>
                    <p>
                        <Button 
                        variant="primary"
                        href="https://github.com/taylorfloyd/portfolio"
                        target='_blank'
                        >Source Code on Github</Button>
                    </p>
                </div>
              </Col>
          </Row>
          <Row className="Row-software-development">
            <Col className="Col-software-development">
                <div className="Jumbotron-software-development">
                    <h3>Weather Application</h3>
                    <p>
                        I developed a Weather Application using React with TypeScript. This application collects user input for location and returns the current weather for that location. It leverages the OpenWeather API.
                    </p>
                    <p>
                        <Button 
                        variant="primary"
                        href="https://github.com/taylorfloyd/weather-app"
                        target='_blank'
                        >Source Code on Github</Button>
                    </p>
                </div>
            </Col>
          </Row>
        </Container>
    </div>
  );
}