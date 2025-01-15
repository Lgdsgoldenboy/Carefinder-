import ErrorBoundary from './ErrorBoundary';
import MarkdownEditor from './MarkdownEditor';

const MyComponent = () => {
    const handleSave = (content: string) => {
        console.log("Saving content:", content);
        // Simulate an error for testing (remove in production)
        // throw new Error("Simulated save error!");
    };

    return (
        <div>
            {/* Other content if needed */}
            <ErrorBoundary> {/* Correct usage: with children */}
                <MarkdownEditor onSave={handleSave} />
            </ErrorBoundary>
            {/* More content after MarkdownEditor */}
             <ErrorBoundary>
                <div>
                    <p>Some text</p>
                </div>
            </ErrorBoundary>
        </div>
    );
};

export default MyComponent;