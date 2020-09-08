import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Title from "./Title";

const About = () => (
  <>
    <Title title="Über mich" className="text-sm-center" />
    <Container>
      <Row className="mb-3">
        <Col lg="8">
          <p>
            Mollit sit tempor enim commodo mollit. Enim officia nulla et
            consequat. Laborum est eu nostrud do cupidatat quis proident aliquip
            velit adipisicing reprehenderit ipsum commodo excepteur. Excepteur
            exercitation ad est elit ipsum duis velit excepteur culpa sit sit
            quis sint officia. Deserunt sint aliquip nostrud ipsum labore
            pariatur. Consectetur nostrud exercitation ullamco consectetur eu
            dolore. Anim commodo exercitation sint ad tempor sint voluptate esse
            labore et. Laborum culpa ipsum adipisicing nisi reprehenderit magna.
            Voluptate id duis sit tempor officia irure amet consequat aute
            cillum sint velit laboris amet. Velit non eu irure velit aute.
            Excepteur tempor magna ullamco sit ea adipisicing cillum. Ipsum sit
            ullamco do eiusmod Lorem ut ea. Esse fugiat tempor excepteur
            consectetur dolor consectetur incididunt et commodo incididunt
            Lorem.
          </p>
          <p>
            Ad laborum id tempor deserunt fugiat aute dolor ex minim amet elit
            sint in. Excepteur eiusmod aute dolore occaecat exercitation
            incididunt ad esse ad amet. Est velit irure irure aute. Sint
            exercitation mollit sunt deserunt duis id deserunt Lorem culpa minim
            sit quis adipisicing in. Elit adipisicing eu dolor occaecat sit
            dolore et deserunt occaecat ullamco sint esse sunt labore. Ut
            consequat nisi veniam officia esse adipisicing et.
          </p>
        </Col>
        <Col lg="4" className="text-center">
          <img src="https://via.placeholder.com/300x400" alt="placeholder" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col fluid>
          <p>
            Anim do sit dolore qui do reprehenderit amet excepteur ullamco ad
            esse reprehenderit aute. Proident amet enim aliqua cillum pariatur
            sit consectetur nostrud. Elit ut irure incididunt quis elit sint non
            dolor ullamco ipsum qui pariatur. Reprehenderit deserunt eu laborum
            ex anim ipsum eiusmod sunt.
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <img
            src="https://via.placeholder.com/800x400"
            className="img-fluid mb-3"
            alt="placeholder"
          />
        </Col>
        <Col lg="4">
          <p>
            Tempor laboris reprehenderit est ut irure eiusmod non veniam.
            Nostrud laboris fugiat proident adipisicing tempor eiusmod sunt
            fugiat mollit qui. Commodo do sint dolore nostrud nisi. Irure enim
            cillum do est eiusmod dolor dolor deserunt proident commodo Lorem
            quis qui. Culpa do velit occaecat non amet ipsum quis ad dolore
            laboris laborum qui nostrud. Ullamco sit ea aute anim. Dolor sint
            sunt culpa elit deserunt magna officia proident consequat amet
            culpa. Excepteur ad eu tempor dolor amet enim enim ut in elit esse.
            Ea pariatur nisi irure commodo exercitation ipsum exercitation in
            commodo irure veniam reprehenderit. Quis veniam elit culpa non
            aliqua sunt dolor consequat proident ullamco. Duis ut amet fugiat
            dolore sint esse.
          </p>
        </Col>
      </Row>
    </Container>
  </>
);

export default About;
