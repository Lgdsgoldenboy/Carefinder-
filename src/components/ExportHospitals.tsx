// src/components/ExportHospitals.tsx
import React from "react";
import { CSVLink } from "react-csv";

type Hospital = {
  name: string;
  address: string;
  phone: string;
  email: string; // Added email to match requirements
};

const ExportHospitals: React.FC<{ hospitals: Hospital[] }> = ({ hospitals }) => {
  const headers = [
    { label: "Name", key: "name" },
    { label: "Address", key: "address" },
    { label: "Phone", key: "phone" },
    { label: "Email", key: "email" }, // Added email to headers
  ];

  return (
    <CSVLink
      data={hospitals}
      headers={headers}
      filename="hospitals.csv"
    >
      Export Hospitals to CSV
    </CSVLink>
  );
};

export default ExportHospitals;