import React from "react";
import './About.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function About() {
  return (
    <div className="About" id="about" href="#about">
        <Container >
            <Row className="Row">
                <Col >
                    <img src="headshot9.jpg" alt="Avatar"/>
                </Col>
                <Col>
                    <h1>Hi, I'm Taylor</h1>
                    {/* <h4>lifelong learner • problem-solver • communicator</h4> */}
                    <p >I'm a software developer with a passion for customer-oriented products. I specialize in web development, specifically using React. </p>
                    <Button
                        variant="dark"
                        href="https://www.linkedin.com/in/taylor-floyd/"
                        target='_blank'
                    >Contact Me on LinkedIn</Button>
                </Col>
            </Row>
        </Container>
    </div>
  );
}