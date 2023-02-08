import React from "react";
import './Footer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function Footer() {
  return (
    <div className="Footer" id="footer" href="#footer">
        <Container >
            <Row className="Row-footer">
                <Col >
                <p >This web application was created by Taylor Floyd </p>
                </Col>
                <Col>
                    <p>
                    <Button
                        variant="link"
                        href="https://www.linkedin.com/in/taylor-floyd/"
                        target='_blank'
                    >Contact Me on LinkedIn</Button>
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}