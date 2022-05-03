import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../contexts/CartContext';


export const Nav:React.FC = () =>{

  const { cart } = useContext(CartContext);

  return (
    <div>
        <header className='heading'>
          <div className='logo'>
            <img src='https://s3-us-east-2.amazonaws.com/socialtec-freihumberto-site/2021/05/logo-min-1.png' />
            <h3>Feira CFH</h3>
          </div>
            <input placeholder='O que está procurando?' type="text" />
            <div className='nav-links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/categorias'}>Categorias</Link>
                <Link to={'/produtos'}><FontAwesomeIcon icon={faUser}/></Link>
                <div className='cart-link'>
                  <Link to={'/carrinho'}><FontAwesomeIcon icon={faShoppingCart}/></Link>
                  <p>{cart.length - 1}</p>
                </div>
            </div>
        </header>
    </div>
    
  )
}
