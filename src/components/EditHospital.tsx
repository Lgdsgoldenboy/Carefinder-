// src/components/EditHospital.tsx
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

interface EditHospitalProps {
  hospital: { id: string; name: string; address: string; phone: string };
}

const EditHospital: React.FC<EditHospitalProps> = ({ hospital }) => {
  const [name, setName] = useState(hospital.name);
  const [address, setAddress] = useState(hospital.address);
  const [phone, setPhone] = useState(hospital.phone);

  const handleUpdate = async () => {
    const hospitalRef = doc(db, "hospitals", hospital.id);

    await updateDoc(hospitalRef, {
      name,
      address,
      phone,
    });
  };

  return (
    <div>
      <h3>Edit Hospital</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Hospital</button>
    </div>
  );
};

export default EditHospital;
