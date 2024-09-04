// src/components/AboutPage.js
import React from 'react';
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
  &:hover {
    color: #e67e22;
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

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled(motion.div)`
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 1rem;
  width: 200px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transform: scale(0.95);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  }
`;

const TeamImage = styled(motion.img)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

const TeamName = styled.h3`
  font-size: 1.2rem;
  color: #e67e22;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  text-align: center;
  font-size: 0.9rem;
  color: #777;
`;

// About Page Component
const AboutPage = () => {
  const navigate = useNavigate();

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
        About Us
      </SectionTitle>

      <Content>
        <Paragraph>
          Welcome to MovieVerse, your ultimate destination for booking movie tickets online. Our goal is to provide a seamless and enjoyable movie-going experience by offering a comprehensive platform to browse and book tickets for the latest movies.
        </Paragraph>
        <Paragraph>
          Our team is dedicated to bringing you the best in entertainment. We continuously update our movie listings and ensure that our booking system is easy to use and secure.
        </Paragraph>
        <Paragraph>
          Meet our team of passionate movie enthusiasts who work tirelessly to make your experience memorable.
        </Paragraph>

        <TeamContainer>
          <TeamMember
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <TeamImage
              src="https://scontent.cdninstagram.com/v/t51.2885-19/436300737_779571523794095_9031963020897643805_n.jpg?stp=dst-jpg_s100x100&_nc_cat=105&ccb=1-7&_nc_sid=fcb8ef&_nc_ohc=qw7AP5BMW04Q7kNvgEpyzri&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYBhkrrhVtiCcQNObHgqsmyumI1MdV3JX8G5auoRXhZgFg&oe=66DC853D"
              alt="Team Member 1"
            />
            <TeamName>Vijay k</TeamName>
            <p>Founder & CEO</p>
          </TeamMember>
          <TeamMember
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <TeamImage
              src="https://scontent.cdninstagram.com/v/t51.2885-19/442531460_8018812398131313_5952977476641941337_n.jpg?stp=dst-jpg_s100x100&_nc_cat=111&ccb=1-7&_nc_sid=fcb8ef&_nc_ohc=oUkUYCc8wLQQ7kNvgGYbyTc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYAi0SlL34zHg3WW46MXwdtAhtioO_kDXBNxfaAxnoPAEA&oe=66DC77D4"
              alt="Team Member 2"
            />
            <TeamName>Vignesh</TeamName>
            <p>Lead Developer</p>
          </TeamMember>
          <TeamMember
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <TeamImage
              src="https://scontent.cdninstagram.com/v/t51.2885-19/457250136_1057383759340000_4480636530891444802_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=fcb8ef&_nc_ohc=G2MsQP-gan0Q7kNvgHjW1dN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYBuxmyv_7q19u7oGIes2pY3W_WY7mdw-nzvlLE_fRGGDw&oe=66DC652B"
              alt="Team Member 3"
            />
            <TeamName>Sylesh</TeamName>
            <p>Marketing Director</p>
          </TeamMember>
        </TeamContainer>
      </Content>

      <Footer>&copy; 2024 MovieVerse. All rights reserved.</Footer>
    </Container>
  );
};

export default AboutPage;
