import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './Footer'; // Import the Footer component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import { db } from '../firebaseConfig'; // Import your Firebase config
import { collection, getDocs } from 'firebase/firestore';

const HomePage: React.FC = () => {
  const [markdownPreviews, setMarkdownPreviews] = useState<string[]>([]);

  useEffect(() => {
    const fetchMarkdownPreviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'markdownPreviews'));
        const previews = querySnapshot.docs.map((doc) => doc.data().markdown);
        setMarkdownPreviews(previews);
      } catch (error) {
        console.error('Error fetching markdown previews:', error);
      }
    };

    fetchMarkdownPreviews();
  }, []);

  return (
    <div className="homepage-container p-4">
      <h1 className="text-4xl font-bold text-center mb-4">
        <FontAwesomeIcon icon={faHospital} /> Welcome to the Hospital Finder
      </h1>
      <p className="text-lg text-center mb-8">Find the best hospitals in your area.</p>
      
      {/* Markdown Previews Section */}
      <h2 className="text-2xl font-semibold mb-2">Markdown Previews:</h2>
      <div className="markdown-previews border rounded-lg p-2 space-y-4">
        {markdownPreviews.length > 0 ? (
          markdownPreviews.map((preview, index) => (
            <div key={index} className="preview-item border rounded-lg p-2">
              <ReactMarkdown>{preview}</ReactMarkdown>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No previews available yet.</p>
        )}
      </div>

      
      
      <div className="features">
        <h2 className="text-2xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc ml-5">
          <li>Search for hospitals by location</li>
          <li>View hospital details and services</li>
          <li>Get directions to hospitals</li>
          <li>Read user reviews</li>
        </ul>
      </div>

      {/* User Reviews Section */}
      <div className="reviews mt-8">
        <h2 className="text-2xl font-semibold mb-4">User Reviews</h2>

        {/* Jane Doe's Review */}
        <div className="review-item flex items-start mb-4">
          <img
            src="/assets/Bitmap.png" /* Replace with the actual path to Jane Doe's image */
            alt="Jane Doe"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">Jane Doe</h3>
            <p className="text-sm text-gray-600">"I had a great experience! The hospital staff was very professional and kind."</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>

        {/* John Doe's Review */}
        <div className="review-item flex items-start mb-4">
          <img
            src="/assets/Bitmap.png" /* Replace with the actual path to John Doe's image */
            alt="John Doe"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-sm text-gray-600">"The services were quick, and I felt well taken care of. Highly recommended!"</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>
      </div>

      {/* Include the Footer at the bottom of the HomePage */}
      <Footer />
    </div>
  );
};

export default HomePage;
