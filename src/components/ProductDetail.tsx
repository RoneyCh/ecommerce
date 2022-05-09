import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

interface ProductDetailProps {
    title: string;
    price: string;
    id: number;
    image: string;
    qty:number
    description: string
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
        <img alt='' className='prodDetail-img' src={product.image}></img>
        <h2>{product.title}</h2>
        <h2>$ {product.price}</h2>
        <button>Comprar</button>
      </div>
      
      <div className='description'>
        <h1>Descrição</h1>
        <h2>{product.description}</h2> 
        <div className='cart'>
          <button onClick={() => cartHandler(product.title, product.price, product.id, product.image)}>+</button>
          <h3>{cart.map(qty => qty.qty)}</h3>
          <button onClick={() => removeItem(product.id)}>-</button>
        </div>
      </div>
      
    </div>
  )
}
