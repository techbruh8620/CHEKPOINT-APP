import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppCards from "./AppCards";

const AppLists = () => {
  return (
    <Container>
      <Row>
        <Col>
          <AppCards />
        </Col>
        <Col>
          <AppCards />
        </Col>
        <Col>
          <AppCards />
        </Col>
      </Row>
    </Container>
  );
};

export default AppLists;
