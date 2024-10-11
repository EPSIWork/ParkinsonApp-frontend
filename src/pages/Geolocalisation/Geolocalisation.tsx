import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Geolocalisation.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 48.8566, // Example latitude (Paris)
  lng: 2.3522   // Example longitude (Paris)
};

const Geolocalisation: React.FC = () => {
  return (
    <div className="geolocalisation">
      <h1>Géolocalisation</h1>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Additional components like markers can be added here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Geolocalisation;