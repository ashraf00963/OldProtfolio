import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.css';

const WelcomeScreen = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // 10 seconds

    const naviTimer = setTimeout(() => {
        navigate('/home');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`welcome-screen ${visible ? 'visible' : 'hidden'}`}>
      <h1>Welcome to My Journey</h1>
    </div>
  );
};

export default WelcomeScreen;
