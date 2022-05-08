import React, { useEffect } from 'react'
import {ProductListPage} from '../pages/productListPage'

interface ProductListProps{
  dataProd: Array<{
    nome: string
    preco: string
    id: number
    categorias: Array<number>
  }>;
  setDataProd: any;
  dataCat: Array<{
    nome: string;
    id: number;
  }>
}

export const ProductList: React.FunctionComponent<ProductListProps> =({dataProd, setDataProd, dataCat}) => {
  

    useEffect(() => {
      const url = 'https://mercadosocial.socialtec.net.br/api/produtos/';
      fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(data => setDataProd(data))
        .catch(()=> alert('erro'))
        
  },[setDataProd(dataProd)])

  return (
    <ProductListPage dataProd={dataProd} dataCat={dataCat}/>
  )
}
