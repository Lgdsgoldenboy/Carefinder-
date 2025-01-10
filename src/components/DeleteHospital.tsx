// src/components/DeleteHospital.tsx
import React from "react";
import { db } from "../firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

interface DeleteHospitalProps {
  hospitalId: string;
}

const DeleteHospital: React.FC<DeleteHospitalProps> = ({ hospitalId }) => {
  const handleDelete = async () => {
    await deleteDoc(doc(db, "hospitals", hospitalId));
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteHospital;
