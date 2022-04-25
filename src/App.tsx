import React from 'react';
import Home from './components/Home';
import './styles/app.scss'
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div> 
  );
}

export default App;
