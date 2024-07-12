import React from 'react';
import { Container, Row, Col, Card, Form,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faPassport, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import '../style/DataVerification.css';
import { Link } from 'react-router-dom';

const iconStyle = { color: 'blue' };

const DataVerification = () => {
  return (<div className="container">
<div className="header">
  <div className="logo">
    <img src="header.png" alt="Logo" />
  </div>
  <div className="text">
    <h2>DEVOSPACE</h2>
    <p>Seamless Real-time Identity Verification</p>
  </div>
</div>
<Container className="my-5">
<h2 className="mb-4">Data Verification</h2>
<p>Choose one of these document types.</p>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center">
              <FontAwesomeIcon icon={faIdCard} size="2x" className="me-3" style={iconStyle} />
              <div className="flex-grow-1">
                <Card.Title className="mb-0">National identity card</Card.Title>
                <Card.Text className="text-muted">Recommended</Card.Text>
              </div>
              <Form.Check type="radio" name="document" id="nationalId" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPassport} size="2x" className="me-3" style={iconStyle} />
              <div className="flex-grow-1">
                <Card.Title className="mb-0">Passport</Card.Title>
              </div>
              <Form.Check type="radio" name="document" id="passport" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body className="d-flex align-items-center">
              <FontAwesomeIcon icon={faIdBadge} size="2x" className="me-3" style={iconStyle} />
              <div className="flex-grow-1">
                <Card.Title className="mb-0">Driving license</Card.Title>
              </div>
              <Form.Check type="radio" name="document" id="drivingLicense" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
           <Link to="/ending">
            <Button variant="primary" size="lg">Continue</Button>
            </Link>
          </div>
    </Container>
</div>



  );
}

export default DataVerification ;
