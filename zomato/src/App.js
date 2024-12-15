import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import PartnerScreen from './components/PartnerScreen';
import LoginModal from './components/LoginModal';

function App() {
  return (
    <div>
      <HomeScreen />
      <PartnerScreen />
      <LoginModal />
    </div>
  );
}

export default App;