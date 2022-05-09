import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Router } from './router';
import CartProvider from './contexts/CartContext';



interface DataProdProps {
  title: string;
  id: number;
  price: string;
  category:string;
  image: string;
}

const App = () => {
  const [dataCat, setDataCat] = useState<string[]>([]);
  const[dataProd,setDataProd] = useState<DataProdProps[]>([]);
  
  return (  
    <CartProvider>
    <div className="App">
      <GlobalStyle />
      <Router dataCat={dataCat} setDataCat={setDataCat} dataProd={dataProd} setDataProd={setDataProd}/>
    </div> 
    </CartProvider>

  );
}

export default App;
