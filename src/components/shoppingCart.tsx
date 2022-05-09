import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ShoppingCart: React.FC = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  
  const buyMessage = () => {
    clearCart();
    return alert('Comprou')
  }

  const priceToNumber = (value:string) => {
    const price:number = +value;
    return price;
  }
  const totalValue = cart.reduce((price, item)=> price + item.qty * priceToNumber(item.preco), 0);

  return (
    <div>
      {cart.map((item) => (
        <div>
          {item.id !== 5000 ? (
            <div className="cart-columns">
              <div className="items-cart">
                <div>
                  <img src={item.image} alt="" />
                  <div>{item.nome}</div>
                </div>
                <div> 
                  <div>Quantidade: {item.qty}</div>
                  <div>  
                    <div>$ {(item.qty * priceToNumber(item.preco)).toFixed(2)}</div>
                    <button onClick={() => removeItem(item.id)} className="remove-item">Remover</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))} 
      <div>{cart.length > 1 ? (
        <><div className="total-value">Total: R$ {totalValue.toFixed(2)}</div><div className="btns-cart">
          <button className="btn-clear" onClick={() => clearCart()}>Limpar carrinho</button>
          <button className="btn-buy" onClick={() => buyMessage()}>Comprar</button>
        </div></>
      ): 'O carrinho está vazio'}
      </div>
      
    </div>
  );
};
