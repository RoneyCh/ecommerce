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


  return (
    <div className='product-detail'>
      <div className='prod-detail-content'>
        <img className='prodDetail-img' src='https://images.pexels.com/photos/11590667/pexels-photo-11590667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
        <h2>{product.nome}</h2>
        <h2>R$ {product.preco}</h2>
      </div>
      <div className='description'>
        <h1>Descrição</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem similique 
          sed quasi, rem sapiente, cum, debitis eos cumque quod labore ipsam excepturi vero soluta 
          alias architecto illum dolore quo.</h2>
        <div className='cart'>
          <button>+</button>
          <h3>0</h3>
          <button>-</button>
        </div>
      </div>
      
    </div>
  )
}
