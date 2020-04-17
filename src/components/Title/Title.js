import React, { useContext } from 'react';
import styled from 'styled-components';

import CitiesContext from '../../context/CitiesContext';

const StyledTitle = styled.h1`
  border-bottom: lightblue 3px solid;
  font-weight: 700;
  
  span {
    color: lightblue;
    font-size: 18px;
  }
`;

const Title = () => {
  const { currentCity } = useContext(CitiesContext);

  return (
    <StyledTitle>
      <span>currentCity:</span> {currentCity}
    </StyledTitle>
  );
};

export default Title;
