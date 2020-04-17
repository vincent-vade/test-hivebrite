import React from 'react';
import styled from 'styled-components';

import CitiesAppProvider from './context/CitiesProvider';

import Cities from './components/Cities/Cities';
import Title from './components/Title/Title';

const StyledApp = styled.div`
  background: #fff;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  width: 960px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 15px;
`;

const StyledContent = styled.div`
  display: flex;
  width: 100%;
`;

const App = () => (
  <CitiesAppProvider>
    <StyledApp>
      <Title />
      <StyledContent>
        <Cities />
      </StyledContent>
    </StyledApp>
  </CitiesAppProvider>
);

export default App;
