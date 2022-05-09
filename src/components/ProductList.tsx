import React, { useEffect } from 'react'
import {ProductListPage} from '../pages/productListPage'

interface ProductListProps{
  dataProd: Array<{
    title: string
    price: string
    id: number
    category: string
    image:string
  }>;
  setDataProd: any;
  dataCat: Array<string>
}

export const ProductList: React.FunctionComponent<ProductListProps> =({dataProd, setDataProd, dataCat}) => {
  

    useEffect(() => {
      const url = 'https://fakestoreapi.com/products';
      fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(data => setDataProd(data))
        .catch(()=> alert('erro'))
        
  },[setDataProd])

  return (
    <ProductListPage dataProd={dataProd} dataCat={dataCat}/>
  )
}
