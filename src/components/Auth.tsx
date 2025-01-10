// src/components/Auth.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Auth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state
    // Simulate an API call
    setTimeout(() => {
      // Replace this with actual login logic
      if (email === 'test@example.com' && password === 'password') {
        login({ email });
        setLoading(false);
        navigate('/');
      } else {
        setError('Invalid email or password'); // Set error message
        setLoading(false);
      }
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state
    // Simulate an API call
    setTimeout(() => {
      // Replace this with actual signup logic
      login({ email });
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="auth-container">
      <h2>Login / Signup</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        <button type="button" onClick={handleSignup} disabled={loading}>
          {loading ? 'Loading...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Auth;