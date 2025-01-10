// src/components/HospitalList.tsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Ensure this path is correct
import { collection, getDocs } from 'firebase/firestore';

interface Hospital {
  id: string;
  name: string;
  location: string;
}

const HospitalList: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'hospitals'));
        const hospitalList: Hospital[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() as Omit<Hospital, 'id'>,
        }));
        setHospitals(hospitalList);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>Hospital List</h2>
      <ul>
        {hospitals.map(hospital => (
          <li key={hospital.id}>
            <strong>{hospital.name}</strong> - {hospital.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
