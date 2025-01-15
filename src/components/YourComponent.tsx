// src/components/YourComponent.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import ErrorBoundary from './ErrorBoundary'; // Import ErrorBoundary
import MarkdownEditor from './MarkdownEditor'; // Import MarkdownEditor

const YourComponent: React.FC = () => {
    const [savedContent, setSavedContent] = useState<string | null>(null);

    const handleSave = (content: string) => {
        console.log("Saving content:", content);
        setSavedContent(content); // Update saved content state
        // Simulate an error for testing (remove in production)
        // throw new Error("Simulated save error!");
    };

    return (
        <div>
            <h1>Welcome to the Hospital Finder</h1>
            <p>
                <FontAwesomeIcon icon={faHospital} /> Find the best hospitals near you!
            </p>

            <ErrorBoundary> {/* Wrap MarkdownEditor with ErrorBoundary */}
                <MarkdownEditor onSave={handleSave} />
            </ErrorBoundary>
            {savedContent && (
                <div>
                    <h2>Saved Content:</h2>
                    <p>{savedContent}</p>
                </div>
            )}
        </div>
    );
};

export default YourComponent;