// src/components/ShareHospitals.tsx
import React from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const ShareHospitals: React.FC<{ hospitals: any[] }> = ({ hospitals }) => {
  const shareList = async () => {
    const csvData = "Name,Address,Phone,Email\n" + hospitals.map(h => `${h.name},${h.address},${h.phone},${h.email}`).join("\n");
    const storageRef = ref(storage, 'hospital_list.csv');
    await uploadString(storageRef, csvData);
    const url = await getDownloadURL(storageRef);
    // Use URL to create a shareable link or send an email
    console.log("Shareable link:", url);
    alert(`Shareable link: ${url}`); // Notify user with the link
  };

  return (
    <button onClick={shareList}>Share Hospitals</button>
  );
};

export default ShareHospitals;