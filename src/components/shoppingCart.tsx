import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ShoppingCart: React.FC = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  
  const buyMessage = () => {
    clearCart();
    return alert('Comprou')
  }

  return (
    <div>
      {cart.map((item) => (
        <div>
          {item.id !== 5000 ? (
            <div className="cart-columns">
              <div className="items-cart">
                <img src="https://images.pexels.com/photos/6098361/pexels-photo-6098361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div>{item.nome}</div>
                <div>Quantidade: {item.qty}</div>
                <div>  
                  <div>R$ {(item.qty * parseFloat(item.preco)).toFixed(2)}</div>
                  <button onClick={() => removeItem(item.id)} className="remove-item">Remover</button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
      <div>{cart.length > 1 ? (
        <div className="btns-cart">
          <button className="btn-clear" onClick={() => clearCart()}>Limpar carrinho</button>
          <button className="btn-buy" onClick={() => buyMessage()}>Comprar</button>
        </div>
      ): 'O carrinho está vazio'}
      </div>
    </div>
  );
};
