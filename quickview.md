App.js: 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snack1" element={<Snack1 />} />
        <Route path="/snack2" element={<Snack2 />} />
        <Route path="/snack3" element={<Snack3 />} />
      </Routes>
    </Router>
  );
}

export default App;



Snack1.js: 

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


Snack2.js: 

import React from 'react';
import { Link } from 'react-router-dom';

const Snack2 = () => {
  return (
    <div>
      <h1>Snack 2</h1>
      <p>This is the page for Snack 1. It's delicious!</p>
      <Link to="/">Go back to the vending machine</Link>
    </div>
  );
};

export default Snack2;


Snack3.js: 

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



VendingMachine.js:

import React from 'react';
import { Link } from 'react-router-dom';

const VendingMachine = () => {
  return (
    <div>
      <h1>Welcome to the Vending Machine!</h1>
      <p>Choose a snack:</p>
      <ul>
        <li><Link to="/Snack1">Snack 1</Link></li>
        <li><Link to="/Snack2">Snack 2</Link></li>
        <li><Link to="/Snack3">Snack 3</Link></li>
      </ul>
    </div>
  );
};

export default VendingMachine;
