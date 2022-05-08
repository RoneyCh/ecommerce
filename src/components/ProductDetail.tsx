import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

interface ProductDetailProps {
    nome: string;
    preco: string;
    id: number;
    imagem: string;
    qty:number
}
  
  interface DataProdProps {
    dataProd: Array<ProductDetailProps>
  }

export const ProductDetail: React.FunctionComponent<DataProdProps> =({dataProd}) => {
  const id = useParams();
  const product:any =  dataProd.find(x => x.id.toString() === id.id);

  const { cart, removeItem, cartHandler } = useContext(CartContext);

  return (
    <div className='product-detail'>
      <div className='prod-detail-content'>
        <img alt='' className='prodDetail-img' src='https://images.pexels.com/photos/11590667/pexels-photo-11590667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
        <h2>{product.nome}</h2>
        <h2>R$ {product.preco}</h2>
        <button>Comprar</button>
      </div>
      
      <div className='description'>
        <h1>Descrição</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatem similique 
          sed quasi, rem sapiente, cum, debitis eos cumque quod labore ipsam excepturi vero soluta 
          alias architecto illum dolore quo.</h2> 
        <div className='cart'>
          <button onClick={() => cartHandler(product.nome, product.preco, product.id)}>+</button>
          <h3>{cart.map(qty => qty.qty)}</h3>
          <button onClick={() => removeItem(product.id)}>-</button>
        </div>
      </div>
      
    </div>
  )
}
