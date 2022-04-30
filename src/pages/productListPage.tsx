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
            <img className='prod-img' src="https://images.pexels.com/photos/6098361/pexels-photo-6098361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div>{prod.nome}</div>
          </Link>
        ))}</div>
      </>
  )
}
