// src/components/SearchPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function SearchPage() {
  const [location, setLocation] = useState('');
  const [hospitalType, setHospitalType] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate('/auth');
    } else {
      navigate(`/hospitals?location=${encodeURIComponent(location)}&type=${encodeURIComponent(hospitalType)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Search for Hospitals</h1>
        <form onSubmit={handleSearch} className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full pl-12 pr-4 py-4 rounded-lg border focus:ring-2 focus:ring-blue-500 text-lg"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="hospitalType">Hospital Type:</label>
            <select
              id="hospitalType"
              value={hospitalType}
              onChange={(e) => setHospitalType(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Select Type</option>
              <option value="general">General Hospital</option>
              <option value="specialized">Specialized Hospital</option>
              <option value="clinic">Clinic</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Search Hospitals
          </button>
        </form>
      </div>
    </div>
  );
}