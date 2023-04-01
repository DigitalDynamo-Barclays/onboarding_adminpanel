import React, { useEffect, useState } from 'react';
import Card from './Components/CardComp/Card';
import Cardverified from './Components/CardComp/Cardverified';
import axios from 'axios';
import './App.css';
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div className='dash'>
          <Card />
          <Cardverified />

        </div>
      </header>
    </div>
  );
}
export default App;
