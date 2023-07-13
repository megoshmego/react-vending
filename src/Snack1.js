import React from 'react';
import { Link } from 'react-router-dom';

const Snack1 = () => {
  return (
    <div>
      <h1>Snack 1</h1>
      <p>This is the page for Snack 1. It's delicious!</p>
      <Link to="/">Go back to the vending machine</Link>
    </div>
  );
};

export default Snack1;
