import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col, Button } from 'react-bootstrap';
import '../styles/RecipeDashboard.css'; 
import { Link } from "react-router-dom";

function RecipeDashboard() {
  const recipes = [
    {
      title: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      imageUrl: 'img6.jpeg',
    },
    {
      title: 'Chicken Biryani',
      description: 'A flavorful and aromatic rice dish cooked with marinated chicken and spices.',
      imageUrl: 'img7.webp',
    },
    {
      title: 'Vegetable Stir-Fry',
      description: 'Quick and healthy stir-fry with fresh vegetables and soy sauce.',
      imageUrl: 'img13.jpg',
    },
    {
      title: 'Beef Stroganoff',
      description: 'Tender strips of beef in a creamy mushroom sauce.',
      imageUrl: 'img8.jpg',
    },
    {
      title: 'Margherita Pizza',
      description: 'Classic pizza with fresh tomato sauce, mozzarella, and basil.',
      imageUrl: 'img4.jpg',
    },
    {
      title: 'Caesar Salad',
      description: 'Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.',
      imageUrl: 'img12.jpg',
    },
    {
      title: 'Butter Chicken',
      description: 'A rich and creamy Indian chicken curry with tomato-based sauce.',
      imageUrl: 'img9.jpg',
    },
    {
      title: 'Chocolate Brownies',
      description: 'Fudgy and delicious chocolate brownies with a hint of gooeyness.',
      imageUrl: 'img10.webp',
    },
    {
      title: 'Pancakes',
      description: 'Fluffy pancakes served with maple syrup and butter.',
      imageUrl: 'img11.jpg',
    },
  ];

  return (
    <div>
      
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
              < Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-recipe">Add Recipe</Nav.Link>
            <Nav.Link as={Link} to="/login">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
      <Container className="mt-4">
        <Row>
          {recipes.map((recipe, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="recipe-card">
                <Card.Img variant="top" src={recipe.imageUrl} />
                <Card.Body>
                  <Card.Title>{recipe.title}</Card.Title>
                  <Card.Text>{recipe.description}</Card.Text>
                  <Button variant="primary">View Recipe</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default RecipeDashboard;
