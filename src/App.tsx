import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { Router } from './router';
import CartProvider from './contexts/CartContext';

interface DataCatProps {
  nome: string;
  id: number;
  midia_list?: string;
}

interface DataProdProps {
  nome: string;
  id: number;
  preco: string;
  categorias:Array<number>;
  midia_list?: string;
}

const App = () => {
  const [dataCat, setDataCat] = useState<DataCatProps[]>([]);
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
