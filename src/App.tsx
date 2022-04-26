import React, { useState } from 'react';
import './styles/app.scss'
import { Router } from './router';

const App = () => {
  const [dataCat, setDataCat] = useState<any[]>([]);
  const[dataProd,setDataProd] = useState<any[]>([]);
  
  return (
    <div className="App">
      <Router dataCat={dataCat} setDataCat={setDataCat} dataProd={dataProd} setDataProd={setDataProd}/>
    </div> 
  );
}

export default App;
