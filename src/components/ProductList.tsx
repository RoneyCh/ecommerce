import React, { useEffect } from 'react'
import {ProductListPage} from '../pages/productListPage'

interface ProductListProps{
  dataProd: Array<any>;
  setDataProd: any;
}

export const ProductList: React.FunctionComponent<ProductListProps> =({dataProd, setDataProd}) => {
  

    useEffect(() => {
      const url = 'https://mercadosocial.socialtec.net.br/api/produtos/';
      fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(data => setDataProd(data))
        .catch(()=> alert('erro'))
        
  },[])

  return (
    <ProductListPage dataProd={dataProd}/>
  )
}
