import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const ShoppingCart:React.FC = () => {

  const { cart } = useContext(CartContext);
  console.log(cart)
  return (
    <div>{cart.map(item => item.nome)}</div>
  )
}
