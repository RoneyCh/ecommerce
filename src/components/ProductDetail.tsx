import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

interface ProductDetailProps {
    nome: string;
    preco: string;
    id: number;
    imagem: string;
}
  
  interface DataProdProps {
    dataProd: Array<ProductDetailProps>
  }

export const ProductDetail: React.FunctionComponent<DataProdProps> =({dataProd}) => {
  const id = useParams();
  const product:any =  dataProd.find(x => x.id.toString() === id.id);
  console.log(product);  

  return (
    <div>
        <div className='prodDetail-img'></div>
        <h2>{product.nome}</h2>
        <h1>{product.preco}</h1>
    </div>
  )
}
