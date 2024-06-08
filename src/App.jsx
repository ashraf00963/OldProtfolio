import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './components/welcome';
import MainContent from './components/HomePage';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
