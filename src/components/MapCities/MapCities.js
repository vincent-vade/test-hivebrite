import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const StyledCities = styled(Map)`
  width: 75%;
  overflow: auto;
`;

const MapCities = ({ position, city }) => {
  return (
    <StyledCities center={position} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{city}</Popup>
      </Marker>
    </StyledCities>
  );
};

MapCities.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  city: PropTypes.string.isRequired,
};

export default MapCities;
