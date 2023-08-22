import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import panterest from "../../Assets/Projects/panterest.png";
import aivo from "../../Assets/Projects/aivo.png";
import mdgadmin from "../../Assets/Projects/mdgadmin.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Quick Chat App"
              description="Personal Chat message to hangout with friends build with react.js and Vercel. Have features which allows user for realtime messaging."
              ghLink="https://github.com/AshCript/QuickChat-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mdgadmin}
              isBlog={false}
              title="mdg-admin"
              description="My personal API for accessing all the 'provinces', 'regions', 'districts', 'communes' and 'fokotany' informations build with Node.js and ExpressJS."
              ghLink="https://github.com/AshCript/mdg-admin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={panterest}
              isBlog={false}
              title="Pinterest clone"
              description="My personal pinterest clone called panterest, build with symfony. This project is still in progress..."
              ghLink="https://github.com/AshCript/panterest-symfony"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aivo}
              isBlog={false}
              title="Image Analysis & Computer Vision"
              description="My personal IACV software, to process images by implementing some algorithms from scratch, build with JAVA."
              ghLink="https://github.com/AshCript/Java-AIVO"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
