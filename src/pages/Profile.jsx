import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ProfilePage() {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header className="text-center">
          <h2>User Profile</h2>
        </Card.Header>
        <Card.Body>
          <Row>
            Image
            
            <Col md={8}>
              <h4>Name: John Doe</h4>
              <p>Email: johndoe@example.com</p>
              <p>Bio: Enthusiastic web developer with a love for coding.</p>
              <p>Location: Katihar, Bihar</p>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">Edit Profile</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default ProfilePage;
