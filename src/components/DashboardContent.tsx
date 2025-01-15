import React, { useEffect, useState } from 'react';
import { fetchHospitals, Hospital } from '../services/Api';

const DashboardContent: React.FC = () => {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]); // State for filtered hospitals
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query

    useEffect(() => {
        const loadHospitals = async () => {
            try {
                const data = await fetchHospitals();
                setHospitals(data);
                setFilteredHospitals(data); // Initialize filtered hospitals with all hospitals
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred.');
                }
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
        const shareableLink = `${window.location.origin}/hospital/${hospital.id}`;
        const shareData = {
            title: hospital.name,
            text: `Check out this hospital: ${hospital.name}`,
            url: shareableLink,
        };

        if (navigator.share) {
            navigator.share(shareData)
                .then(() => console.log('Share successful'))
                .catch(err => console.error('Error sharing:', err));
        } else {
            // Fallback: Copy to clipboard and alert
            navigator.clipboard.writeText(shareableLink)
                .then(() => alert('Link copied to clipboard: ' + shareableLink))
                .catch(() => alert('Failed to copy the link. Here is the link: ' + shareableLink));
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
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded-lg p-2 mb-4 w-full"
            />
            {filteredHospitals.length === 0 ? (
                <div>No hospitals found matching your search.</div>
            ) : (
                <ul className="hospital-list">
                    {filteredHospitals.map(hospital => (
                        <li key={hospital.id} className="hospital-item border p-2 mb-2 rounded">
                            <h3 className="font-bold">{hospital.name}</h3>
                            <p>{hospital.address}</p>
                            <p>Phone: {hospital.phone_number}</p>
                            <button
                                onClick={() => handleShare(hospital)}
                                className="share-button bg-blue-500 text-white p-2 rounded"
                            >
                                Share Hospital
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DashboardContent;
