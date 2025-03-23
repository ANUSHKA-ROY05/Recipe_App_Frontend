import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css'; 

const Login = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="login-box shadow p-4">
            <h2 className="text-center mb-4">Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" />
              </Form.Group>
              <div className="d-grid mb-3">
                <Button variant="primary" type="submit" className="hover-button">
                  Login
                </Button>
              </div>
            </Form>

            <div className="text-center">
              <p>
                New User? <Link to="/register" className="hover-link">Register here</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
