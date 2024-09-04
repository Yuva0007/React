import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Container = styled.div`
  background-color: #121212;
  color: white;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  padding: 2rem;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled(motion.h1)`
  font-size: 2.5rem;
  color: #e67e22;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(255, 165, 0, 0.8), rgba(255, 105, 0, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #e67e22;
  }
  &:after {
    content: '';
    display: block;
    height: 2px;
    background: #e67e22;
    width: 0;
    transition: width 0.3s ease;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
  &:hover:after {
    width: 100%;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #e67e22;
  text-align: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e67e22;
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: #ddd;
`;

const Input = styled(motion.input)`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #1e1e1e;
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  &:focus {
    border-color: #e67e22;
    outline: none;
    box-shadow: 0 0 5px rgba(230, 126, 34, 0.5);
  }
`;

const Textarea = styled(motion.textarea)`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #1e1e1e;
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  &:focus {
    border-color: #e67e22;
    outline: none;
    box-shadow: 0 0 5px rgba(230, 126, 34, 0.5);
  }
`;

const Button = styled(motion.button)`
  background-color: #e67e22;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #d35400;
    transform: scale(1.05);
  }
  &:disabled {
    background-color: #555;
    cursor: not-allowed;
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
`;

// Contact Page Component
const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Your message has been sent!');
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <Container>
      <Header>
        <Logo
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          onClick={() => navigate('/')}
        >
          MovieVerse
        </Logo>
        <Nav>
          <NavLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/"
          >
            Home
          </NavLink>
          
          <NavLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/about"
          >
            About
          </NavLink>
          <NavLink
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
          >
            Contact
          </NavLink>
        </Nav>
      </Header>

      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Contact Us
      </SectionTitle>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="5"
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </FormGroup>
        <Button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </Form>

      <Footer>&copy; 2024 MovieVerse. All rights reserved.</Footer>
    </Container>
  );
};

export default ContactPage;
