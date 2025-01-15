// MarkdownEditor.tsx
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownEditorProps {
    onSave: (content: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onSave }) => {
    const [markdown, setMarkdown] = useState<string>("");
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Saving...");
        setError(null);

        try {
            onSave(markdown);
            setMarkdown("");
            setStatus("Successfully saved!");
        } catch (err) {
            console.error("Error saving content:", err);
            setError("Failed to save content. Please try again.");
            setStatus(null);
        }
    };

    return (
        <div className="markdown-editor">
            <h2 className="text-2xl font-bold mb-4">Markdown Editor</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <textarea
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    placeholder="Enter hospital details in markdown"
                    rows={10}
                    cols={50}
                    className="w-full p-2 border rounded mb-2"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Save
                </button>
            </form>
            {status && <p className="text-green-600">{status}</p>}
            {error && <p className="text-red-600">{error}</p>}
            <h3 className="text-xl font-semibold mb-2">Preview:</h3>
            <div className="border p-4 rounded bg-gray-100">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;