import React from 'react';
import snack3Image from './assets/candy.png';
import { Link } from 'react-router-dom';

const Snack3 = () => {
  return (
    <div style={{ backgroundImage: `url(${snack3Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
     }}>
      <h1 style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px' }}>Snack 3</h1>
      <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5px' }}>This is the page for Snack 1. It's delicious!</p>
      <Link to="/" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5px' }}>Go back to the vending machine</Link>
    </div>
  );
};

export default Snack3;
