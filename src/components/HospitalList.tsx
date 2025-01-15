import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // Ensure this path is correct
import { collection, getDocs } from "firebase/firestore";

interface Hospital {
  id: string;
  name: string;
  location: string;
}

interface HospitalListProps {
  providers?: Hospital[]; // Accept providers as an optional prop
}

const HospitalList: React.FC<HospitalListProps> = ({ providers }) => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch hospitals only if providers prop is not provided
    if (!providers) {
      const fetchHospitals = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "hospitals"));
          const hospitalList: Hospital[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data() as Omit<Hospital, "id">,
          }));
          setHospitals(hospitalList);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
        } finally {
          setLoading(false);
        }
      };

      fetchHospitals();
    } else {
      // Use the provided data directly
      setHospitals(providers);
      setLoading(false);
    }
  }, [providers]);

  if (loading) {
    return <div>Loading hospitals...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (hospitals.length === 0) {
    return <div>No hospitals found.</div>;
  }

  return (
    <div>
      <h2>Hospital List</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id} className="hospital-item">
            <strong>{hospital.name}</strong> - {hospital.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
