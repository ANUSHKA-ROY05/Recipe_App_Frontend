import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    steps: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe added:', recipe);

  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="shadow p-4 bg-white rounded">
            <h2 className="text-center mb-4">Add a New Recipe</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Recipe Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter recipe title"
                  name="title"
                  value={recipe.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formIngredients">
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter ingredients (comma-separated)"
                  name="ingredients"
                  value={recipe.ingredients}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSteps">
                <Form.Label>Steps</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter steps to prepare the recipe"
                  name="steps"
                  value={recipe.steps}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Image Upload</Form.Label>
                <Form.Control type="file" name="image" onChange={handleImageChange} />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Add Recipe
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRecipe;
