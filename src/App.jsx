import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import WelcomeScreen from './components/welcome';
import MainContent from './components/HomePage';

function App() {
  const [show, setShow] = useState(false);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen setShow={setShow} />} />
        <Route path="/home" element={<MainContent show={show} />} />
      </Routes>
    </Router>
  );
}

export default App;
