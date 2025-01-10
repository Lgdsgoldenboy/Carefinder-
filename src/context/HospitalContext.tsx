import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchHospitals } from '../services/api';

interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  // Add more fields as per the API response
}

interface HospitalContextType {
  hospitals: Hospital[];
  loading: boolean;
  error: string | null;
}

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

export const HospitalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const data = await fetchHospitals();
        setHospitals(data); // Adjust based on the API's data structure
      } catch (err) {
        setError('Failed to fetch hospitals');
      } finally {
        setLoading(false);
      }
    };

    getHospitals();
  }, []);

  return (
    <HospitalContext.Provider value={{ hospitals, loading, error }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitals = () => {
  const context = useContext(HospitalContext);
  if (!context) {
    throw new Error('useHospitals must be used within a HospitalProvider');
  }
  return context;
};
