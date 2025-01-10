import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { db } from "../firebaseConfig"; // Import Firebase config
import { addDoc, collection } from "firebase/firestore"; // Firestore methods

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState("");
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // Save data to Firebase Firestore
      const docRef = await addDoc(collection(db, "markdownData"), {
        content: markdown,
        timestamp: new Date(), // Optional: Add a timestamp
      });

      console.log("Document written with ID: ", docRef.id);

      // Additional operations
      setMarkdown(""); // Reset the editor
      setStatus("Successfully submitted!");
      alert("Your markdown has been successfully saved to Firebase.");
    } catch (error) {
      console.error("Error saving data to Firebase:", error);
      setStatus("Failed to submit. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Enter hospital details in markdown"
          rows={10}
          cols={50}
        />
        <br />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
      {status && <p className="status-message">{status}</p>}
      <h3>Preview:</h3>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;
