import React from 'react'
import { Link, useParams } from 'react-router-dom';


interface ProductListPageProps {
    nome: string;
    preco: string;
    id: number;
    categorias: Array<number>
    
  }
  
  interface DataProdProps {
    dataProd: Array<ProductListPageProps>
    dataCat:Array<{
      nome: string;
      id: number;
    }>
  }

export const ProductListPage:React.FC<DataProdProps> = ({dataProd,dataCat}) => {
    
const id = useParams()
const product = dataProd.filter(prod => prod.categorias.find(x => x.toString() === id.id))
const nomeCat = dataCat.filter(cat => cat.id.toString() === id.id)

  return (
    <>
      <h1 style={{padding: '1rem'}}>{nomeCat.map(nome => nome.nome)}</h1>
      <div className='prodlist-content'>{product.map((prod: {id: number; nome: string}) => (
          <Link className='prodlist' key={prod.id} to={`/categorias/${id.id}/${prod.id}`}>
            <div className='prod-img'></div>
            <div>{prod.nome}</div>
          </Link>
        ))}</div>
      </>
  )
}
