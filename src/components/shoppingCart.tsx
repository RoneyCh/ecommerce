import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ShoppingCart: React.FC = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <div>
          {item.id !== 5000 ? (
            <div className="cart-columns">
              <div className="items-cart">
                <div>{item.nome}</div>
                <div>{item.preco}</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};
