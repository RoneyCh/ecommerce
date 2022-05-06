import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";

export const Nav: React.FC = () => {
  const { cart } = useContext(CartContext);

  const [showHamburger, setShowHamburguer] = useState(false);
  


  return (
    <header className="heading">
      <div className="logo">
        <img src="https://s3-us-east-2.amazonaws.com/socialtec-freihumberto-site/2021/05/logo-min-1.png" />
        <h3>Feira CFH</h3>
      </div>
      <input placeholder="O que está procurando?" type="text" />
      <div className="nav-links" id={showHamburger ? "hidden" : ""}> 
        <Link to={"/"}>Home</Link>
        <Link to={"/categorias"}>Categorias</Link>
        <div className="cart-link">
          <Link to={"/carrinho"}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <p>{cart.length - 1}</p>
        </div>   
      </div>
      <button onClick={() => setShowHamburguer(!showHamburger)} className="toggle-btn"><FontAwesomeIcon icon={faBars}/></button>
      
    </header>
  );
};
