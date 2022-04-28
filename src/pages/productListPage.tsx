import React from 'react'
import { useParams } from 'react-router-dom';


interface ProductListPageProps {
    nome: string;
    preco: string;
    id: number;
    categorias: Array<number>
  }
  
  interface DataProdProps {
    dataProd: Array<ProductListPageProps>
  }

export const ProductListPage:React.FC<DataProdProps> = ({dataProd}) => {
    
const id = useParams()
const product = dataProd.filter(prod => prod.categorias.find(x => x.toString() === id.id))

  return (
    <>
      <h1 style={{padding: '1rem'}}>Produtos</h1>
      <div className='prodlist-content'>{product.map((prod: {id: number; nome: string}) => (
          <div className='prodlist' key={prod.id}>
            <div className='prod-img'></div>
            <div>{prod.nome}</div>
          </div>
        ))}</div>
      </>
  )
}
