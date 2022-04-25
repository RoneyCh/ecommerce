import React from 'react';
import Home from './components/Home';
import './styles/app.scss'
import { Router } from './router';

const App = () => {
  return (
    <div className="App">
      <Router />
    </div> 
  );
}

export default App;
