import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ShoppingCart: React.FC = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <div>
          {item.id !== 5000 ? (
            <div className="cart-columns">
              <div onClick={() => removeItem(item.id)} className="items-cart">
                <img src="https://images.pexels.com/photos/6098361/pexels-photo-6098361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div>{item.nome}</div>
                <div>R$ {item.preco}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
      <div className="clear">{cart.length > 1 ? (<button  onClick={() => clearCart()}>Limpar carrinho</button>): 'O carrinho está vazio'}</div>
    </div>
  );
};
