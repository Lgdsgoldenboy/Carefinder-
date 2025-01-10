// src/components/YourComponent.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

const YourComponent: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Hospital Finder</h1>
      <p>
        <FontAwesomeIcon icon={faHospital} /> Find the best hospitals near you!
      </p>
    </div>
  );
};

export default YourComponent;