// src/components/DashboardContent.tsx
import React, { useEffect, useState } from 'react';
import { fetchHospitals, Hospital } from '../services/Api'; // Import the fetchHospitals function

const DashboardContent: React.FC = () => {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query
    const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]); // State for filtered hospitals

    useEffect(() => {
        const loadHospitals = async () => {
            try {
                const data = await fetchHospitals();
                setHospitals(data);
                setFilteredHospitals(data); // Initialize filtered hospitals with all hospitals
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadHospitals();
    }, []);

    useEffect(() => {
        // Filter hospitals based on search query
        const filtered = hospitals.filter(hospital =>
            hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredHospitals(filtered);
    }, [searchQuery, hospitals]);

    const handleShare = (hospital: Hospital) => {
        const shareableLink = `${window.location.origin}/hospital/${hospital.id}`; // Create a shareable link
        const shareData = {
            title: hospital.name,
            text: `Check out this hospital: ${hospital.name}`,
            url: shareableLink,
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => {
                    console.log('Share successful');
                })
                .catch((error) => {
                    console.error('Error sharing:', error);
                });
        } else {
            // Fallback for browsers that do not support the Web Share API
            alert('Sharing is not supported in this browser. Here is the link: ' + shareableLink);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="dashboard-content">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <h2 className="text-xl font-semibold mb-2">Hospitals List</h2>
            <input
                type="text"
                placeholder="Search hospitals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
                className="border rounded-lg p-2 mb-4 w-full" // Add some styling
            />
            <ul className="hospital-list">
                {filteredHospitals.map(hospital => (
                    <li key={hospital.id} className="hospital-item border p-2 mb-2 rounded">
                        <h3 className="font-bold">{hospital.name}</h3>
                        <p>{hospital.address}</p>
                        <p>Phone: {hospital.phone_number}</p>
                        <button onClick={() => handleShare(hospital)} className="share-button">
                            Share Hospital
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardContent;