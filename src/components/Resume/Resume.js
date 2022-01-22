import React from "react";
import './Resume.css'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Resume() {
  return (
    <div className="Resume" id="resume" href="#resume">
        <Container >
            <Row className="resume-row-education">
                 <Col md={5} className="experience-title ">
                    <h1>EDUCATION</h1>
                </Col>
                <Col className="experience-section">
                    <div className="experience">
                        <h2>North Carolina State University</h2>
                        <h5 className="subheader">Bachelor of Science in Computer Science</h5>
                        <h6 className="date">Class of 2019</h6>
                        <ul>
                            <li>GPA: 3.7</li>
                            <li>Goodnight Scholar</li>
                            <li>University Scholar</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="resume-row-skills">
                 <Col md={5} className="experience-title ">
                    <h1>TECHNICAL SKILLS</h1>
                </Col>
                <Col className="experience-section">
                    <div className="experience">
                        <h2>Languages</h2>
                        <h5 className="subheader">JavaScript, Python, HTML/CSS, Java, Golang</h5>
                    </div>
                    <div className="experience">
                        <h2>Frameworks</h2>
                        <h5 className="subheader">React, Express</h5>
                    </div>
                    <div className="experience">
                        <h2>IoT</h2>
                        <h5 className="subheader">MQTT, Bluetooth, BACnet, Azure IoT Hub, SAS ESP</h5>
                    </div>
                    <div className="experience">
                        <h2>Tools</h2>
                        <h5 className="subheader">Git, Linux CLI, Azure CLI, Postgres, Docker, Gerrit, Jira</h5>
                    </div>
                    <div className="experience">
                        <h2>Testing</h2>
                        <h5 className="subheader">Jest, Puppeteer, Mocha, Chai</h5>
                    </div>
                </Col>
            </Row>
            <Row className="resume-row-experience">
                <Col md={5} className="experience-title ">
                    <h1>EXPERIENCE</h1>
                </Col>
                <Col className="experience-section">
                    <div className="experience">
                        <h2>Frontend IoT Software Developer</h2>
                        <h5 className="subheader">SAS Institute - Cary, NC</h5>
                        <h6 className="date">Sept 2019 - Sept 2021</h6>
                        <ul>
                            <li>Headed frontend development for a customer-facing React IoT application in Azure Marketplace.</li>
                            <li>Created a full-stack IoT Smart Campus application with React and Node/Express.</li>
                            <li>Oversaw application testing for a full-stack application using Jest, Puppeteer, Mocha, and Chai.</li>
                            <li>Implemented real-time monitoring of local beehives using Bluetooth sensors, Linux CLI, and SAS ESP.</li>
                            <li>Engineered an IoT demo using Sphero robots, Python + Bluetooth scripts, and edge devices.</li>
                            <li>Learned React, JavaScript, Golang, and HTML/CSS, proving the ability to learn on the job.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <h2>Software Development Intern</h2>
                        <h5 className="subheader">SAS Institute - Cary, NC</h5>
                        <h6 className="date">May 2018 - Sept 2019</h6>
                        <ul>
                            <li>Developed a real-time IoT contextual outlier detection program in Python utilizing SAS ESP.</li>
                            <li>Presented various successful project demos to internal team and executive leadership.</li>
                            <li>Completed certification courses in SAS Programming and Python.</li>
                            <li>Conducted in-depth research projects on real-time clustering algorithms for streaming data.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <h2>Information Technology Intern</h2>
                        <h5 className="subheader">PRA Health Sciences - Raleigh, NC</h5>
                        <h6 className="date">June 2017 - Aug 2017</h6>
                        <ul>
                            <li>Led an initiative to implement and test Disaster Recovery Plans for 36 applications.</li>
                            <li>Compiled and analyzed DR Plan application data assessing risk, business impact, and recovery time.</li>
                            <li>Collaborated with a variety of in-house and remote employees regarding application history and testing.</li>
                            <li>Developed and administered a SharePoint site with over 70 sub-sites for the Business Application Team.</li>
                        </ul>
                    </div>
                    <div className="experience">
                        <h2>Software Engineering Intern</h2>
                        <h5 className="subheader">Garmin International - Cary, NC</h5>
                        <h6 className="date">Sept 2016 – Dec 2016</h6>
                        <ul>
                            <li>Designed and developed an Android application using Java for the Garmin Impact Bat Swing Sensor.</li>
                            <li>Created animated 3D graphics for the application using Blender.</li>
                            <li>Collaborated with device developers to support interaction between the application and the device.</li>
                            <li>Met strict company deadlines and presented application progress in weekly team meetings.</li>
                            <li>Obtained application approval from upper level management at Garmin headquarters in Olathe, Kansas.</li>
                        </ul>
                    </div>
                </Col>
            </Row>

        </Container>
    </div>
  );
}