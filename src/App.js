import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import OneBox from './components/OneBox/OneBox';
import { ThemeProvider } from './contexts/ThemeContext';
import { fetchThreads } from './utils/api';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    loadThreads();
  }, []);

  const loadThreads = async () => {
    const data = await fetchThreads();
    setThreads(data);
  };

  return (
    <ThemeProvider>
      <GoogleOAuthProvider clientId="986139332256-1idf6n70u123fsarl5if48hs8ae1l4li.apps.googleusercontent.com">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={
                isAuthenticated ? <Navigate to="/onebox" /> : <Navigate to="/login" />
              } />
              <Route path="/login" element={
                <Login setIsAuthenticated={setIsAuthenticated} />
              } />
              <Route path="/onebox" element={
                isAuthenticated ? (
                  <OneBox threads={threads} setThreads={setThreads} />
                ) : (
                  <Navigate to="/login" />
                )
              } />
            </Routes>
          </div>
        </Router>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
