import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Features from './components/Features';
import Auth from './components/Auth';
import HospitalSearch from './components/HospitalSearch';
import HospitalList from './components/HospitalList';
import Hospitals from './components/Hospitals';
import ErrorBoundary from './components/ErrorBoundary';
import ExportHospitals from './components/ExportHospitals';
import MarkdownEditor from './components/MarkdownEditor';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import DashboardContent from './components/DashboardContent';
import Contact from './components/Contact';
import About from './components/About';
import Nav2 from './components/Nav2';
import { AuthProvider } from './context/AuthContext';
import { HospitalProvider } from './context/HospitalContext';
import { ThemeProvider } from './components/ThemeContext';
import './styles/styles.css';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <HospitalProvider>
                    <Router>
                        <Nav2 />
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="/landing" element={<LandingPage />} />
                                <Route path="/features" element={<Features />} />
                                <Route path="/auth" element={<Auth />} />
                                <Route path="/search" element={<HospitalSearch />} />
                                <Route path="/export" element={<ExportHospitals hospitals={[]} />} />
                                <Route path="/signup" element={<SignUpPage />} />
                                <Route path="/dashboard" element={<DashboardContent />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/about" element={<About />} />

                                {/* Wrap the MarkdownEditor with ErrorBoundary */}
                                <Route path="/editor" element={
                                    <ErrorBoundary>
                                        <MarkdownEditor onSave={() => {}} />
                                    </ErrorBoundary>
                                } />

                                {/* Example of wrapping another component if needed */}
                                <Route path="/hospitals" element={
                                    <ErrorBoundary>
                                        <Hospitals />
                                    </ErrorBoundary>
                                } />

                                <Route path="/hospital-list" element={
                                    <ErrorBoundary>
                                        <HospitalList />
                                    </ErrorBoundary>
                                } />

                            </Routes>
                        </div>
                    </Router>
                </HospitalProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App;