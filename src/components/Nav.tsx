import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";

export const Nav: React.FC = () => {
  const { cart } = useContext(CartContext);

  const [showHamburger, setShowHamburguer] = useState(false);
  


  return (
    <header className="heading">
      <div className="logo">
        <img alt="" src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?cs=srgb&dl=pexels-magda-ehlers-1337380.jpg&fm=jpg" />
      </div>
      <input placeholder="O que está procurando?" type="text" />
      <div style={{display:'flex'}}>
      <div className="nav-links" id={showHamburger ? "hidden" : ""}> 
        <Link to={"/"}>Home</Link>
        <Link to={"/categorias"}>Categorias</Link>
      </div>
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
