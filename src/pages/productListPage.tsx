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
    <div>{product.map((prod: any) => (
        <div key={prod.id}>
        <div>{prod.nome}</div>
        </div>
      ))}</div>
  )
}
