import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Features from './components/Features';
import Auth from './components/Auth';
import HospitalSearch from './components/HospitalSearch';
import HospitalList from './components/HospitalList';
import Hospitals from './components/Hospitals';
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
import { ThemeProvider } from './components/ThemeContext'; // Import ThemeProvider
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <ThemeProvider> {/* Wrapping for dark/light theme */}
      <AuthProvider> {/* Wrapping for authentication context */}
        <HospitalProvider> {/* Wrapping for hospital data context */}
          <Router>
            <Nav2 />
            <div className="container">
              <Routes>
                {/* Define your routes */}
                <Route path="/" element={<Homepage />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/features" element={<Features />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/search" element={<HospitalSearch />} />
                <Route path="/export" element={<ExportHospitals hospitals={[]} />} />
                <Route path="/editor" element={<MarkdownEditor />} />
                <Route path="/hospitals" element={<Hospitals />} />
                <Route path="/hospital-list" element={<HospitalList />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/dashboard" element={<DashboardContent />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </Router>
        </HospitalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
