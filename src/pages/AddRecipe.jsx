import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';
import apiConnector from '../component/apiConnector'; // Import your preconfigured Axios instance

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    steps: '',
    image: null,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handle changes for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle file input change
  const handleImageChange = (e) => {
    setRecipe(prevState => ({ ...prevState, image: e.target.files[0] }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation: ensure title, ingredients, and steps are provided.
    if (!recipe.title.trim() || !recipe.ingredients.trim() || !recipe.steps.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    // Clear any previous errors
    setError('');
    // Create FormData to support file uploads.
    const formData = new FormData();
    formData.append('title', recipe.title);
    formData.append('ingredients', recipe.ingredients);
    formData.append('steps', recipe.steps);
    if (recipe.image) {
      formData.append('image', recipe.image);
    }

    try {
      // Make an API call via the apiConnector to create a new recipe.
      console.log(formData);
      const response = await apiConnector.post('/addrecipe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      // Provide success feedback and clear form fields if desired.
      setSuccess('Recipe added successfully!');
      setRecipe({
        title: '',
        ingredients: '',
        steps: '',
        image: null,
      });
      
      // Redirect to the recipes list (or dashboard) after success.
      navigate('/recipes');
      
    } catch (err) {
      console.error('Error adding recipe:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'An error occurred while adding the recipe.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="shadow p-4 bg-white rounded">
            <h2 className="text-center mb-4">Add a New Recipe</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
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
