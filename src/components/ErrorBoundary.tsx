import React, { Component, ErrorInfo } from 'react';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

const logError = (error: Error, errorInfo: ErrorInfo) => {
    // Implement your error logging logic here (e.g., send to Sentry)
    console.error("Logging error to service:", error, errorInfo);
};

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logError(error, errorInfo);
        console.error("Error caught by Error Boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <p>Please try again later or contact support.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;