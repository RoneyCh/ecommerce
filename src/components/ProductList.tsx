import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const ProductList: React.FunctionComponent<any> =(props) => {
  const id = useParams<any>()
    useEffect(() => {
      const url = 'https://mercadosocial.socialtec.net.br/api/produtos/';
      fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(data => props.setDataProd(data))
        .catch(()=> alert('erro'))
        
  },[])

  const product = props.dataProd.filter((prod: { categorias: Array<any> }) => prod.categorias.toString() === id.id)
  console.log(product)
  return (
    <div>{product.map((prod: any) => (
      <div>{prod.nome}</div>
    ))}</div>
  )
}
