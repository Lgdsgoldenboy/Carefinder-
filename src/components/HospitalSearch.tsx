// src/components/HospitalSearch.tsx
import React, { useState, useEffect } from 'react';

const HospitalSearch: React.FC = () => {
  const [location, setLocation] = useState('');
  const [hospitals, setHospitals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data from the API
  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch('https://getreliancehealth.com/nigeria/providers/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHospitals(data); // Assuming the API returns an array of hospitals
      } catch (error) {
        setError('Failed to fetch hospitals');
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  const handleSearch = () => {
    // Implement search functionality based on location
    // This can filter the hospitals array based on the location input
  };

  if (loading) {
    return <div>Loading hospitals...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="search-container">
      <h2>Search Hospitals</h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      <ul className="hospital-list">
        {hospitals.map((hospital, index) => (
          <li key={index} className="hospital-card">
            <h3>{hospital.name}</h3> {/* Adjust based on actual data structure */}
            <p>{hospital.address}</p> {/* Adjust based on actual data structure */}
            <p>{hospital.phone}</p> {/* Adjust based on actual data structure */}
            <p>{hospital.email}</p> {/* Adjust based on actual data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalSearch;