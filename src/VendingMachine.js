import React from 'react';
import bgImage from './assets/vending.png';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      
      <h1 style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>Welcome to the Vending Machine!</h1>
      <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5px' }}>Choose a snack:</p>
      <ul>
  <li><Link to="/snack1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '0px' }}>Snack 1</Link></li>
  <li><Link to="/snack2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '0px' }}>Snack 2</Link></li>
  <li><Link to="/snack3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '0px' }}>Snack 3</Link></li>
</ul>

    </div>
  );
};

export default VendingMachine;
