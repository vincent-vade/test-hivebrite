import React, { useState } from 'react';
import {
  INITIAL__CITY_POSITION,
  INITIAL_CITY_NAME,
  INITITAL_CITY_RANK,
} from '../constants';
import CitiesContext from './CitiesContext';

const CitiesProvider = ({ children }) => {
  const [position, setPosition] = useState(INITIAL__CITY_POSITION);
  const [currentCity, setCurrentCity] = useState(INITIAL_CITY_NAME);
  const [rank, setRank] = useState(INITITAL_CITY_RANK);

  const updatePosition = (city) => setPosition([city.latitude, city.longitude]);
  const updateCity = (city) => setCurrentCity(city.city);
  const updateRank = (city) => setRank(city.rank);

  return (
    <CitiesContext.Provider
      value={{
        position,
        currentCity,
        rank,
        updatePosition,
        updateCity,
        updateRank,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export default CitiesProvider;
