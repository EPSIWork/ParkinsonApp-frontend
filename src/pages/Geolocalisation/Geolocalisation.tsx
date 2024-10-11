import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const Geolocalisation: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [2.3522, 48.8566], // Longitude, Latitude (Paris)
          zoom: 10,
          projection: 'EPSG:4326', // Use 'EPSG:3857' for default web mercator
        }),
      });
    }
  }, []);

  return (
    <div className="geolocalisation">
      <h1>Géolocalisation</h1>
      <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Geolocalisation;