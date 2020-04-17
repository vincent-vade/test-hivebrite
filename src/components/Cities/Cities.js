import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import getCities from '../../services/http/cities';
import MapCities from '../MapCities/MapCities';
import CitiesContext from '../../context/CitiesContext';

const StyledCities = styled('div')`
  width: 25%;
  overflow: auto;
  background: #fff;
  border-radius: 3px;
  height: 450px;
  margin-right: 1rem;
`;

const StyledCity = styled.div`
  padding: 0.5rem;
  font-size: ${({ currentCity }) => currentCity && '18px'};
  background: ${({ currentCity }) => currentCity && 'lightblue'};
  
  p {
    font-weight: ${({ currentCity }) => currentCity ? 'bold' : "light"};
  }
`;

const Cities = () => {
  const {
    position,
    currentCity,
    rank,
    updatePosition,
    updateRank,
    updateCity,
  } = useContext(CitiesContext);

  const [cities, setCities] = useState([]);

  const fetchCities = async () => await getCities();

  const handleClick = (city) => {
    updatePosition(city);
    updateRank(city);
    updateCity(city);
  };

  useEffect(() => {
    fetchCities().then((result) => setCities(result));
  }, []);

  if (!cities.length) {
    return 'loading';
  }

  return (
    <>
      <StyledCities>
        {cities.map((city) => (
          <StyledCity
            key={city.rank}
            currentCity={city.rank === rank}
            onClick={() => handleClick(city)}
          >
            <p>{city.city}</p>
          </StyledCity>
        ))}
      </StyledCities>
      <MapCities position={position} city={currentCity} />
    </>
  );
};

export default Cities;
