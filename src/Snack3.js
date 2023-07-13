import React from 'react';
import { Link } from 'react-router-dom';

const Snack3 = () => {
  return (
    <div>
      <h1>Snack 3</h1>
      <p>This is the page for Snack 1. It's delicious!</p>
      <Link to="/">Go back to the vending machine</Link>
    </div>
  );
};

export default Snack3;
