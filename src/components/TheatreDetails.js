import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  background-color: #121212;
  color: white;
  font-family: 'Roboto', sans-serif;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const TheatresList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TheatreCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const TheatreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TheatreName = styled.h3`
  font-size: 1.75rem;
  color: #f39c12;
  margin: 0;
`;

const TheatreLocation = styled.p`
  font-size: 1.25rem;
  color: #ccc;
  margin: 0;
`;

const Showtimes = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ShowtimeButton = styled(Link)`
  background-color: #f39c12;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }
`;

function TheatreDetails() {
  const { movieId } = useParams();

  const theatres = [
    { id: 1, name: 'CineWorld', location: 'Downtown' },
    { id: 2, name: 'FilmHouse', location: 'Uptown' },
    { id: 3, name: 'MoviePalace', location: 'Midtown' },
    { id: 4, name: 'StarCinema', location: 'Suburb' },
  ];

  const showtimes = [
    '10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>Available Theatres for Movie ID: {movieId}</HeaderTitle>
      </Header>
      <TheatresList>
        {theatres.map(theatre => (
          <TheatreCard key={theatre.id}>
            <TheatreInfo>
              <TheatreName>{theatre.name}</TheatreName>
              <TheatreLocation>{theatre.location}</TheatreLocation>
              <Showtimes>
                {showtimes.map((time, index) => (
                  <ShowtimeButton 
                    key={index} 
                    to={`/seating/${theatre.id}/${time}`} 
                  >
                    {time}
                  </ShowtimeButton>
                ))}
              </Showtimes>
            </TheatreInfo>
          </TheatreCard>
        ))}
      </TheatresList>
    </Container>
  );
}

export default TheatreDetails;
