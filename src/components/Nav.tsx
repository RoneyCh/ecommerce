import React from 'react'
import { Link } from 'react-router-dom'

export const Nav:React.FC = () =>{

  return (
    <div>
        <header className='heading'>
          <div className='logo'>
            <img src='https://s3-us-east-2.amazonaws.com/socialtec-freihumberto-site/2021/05/logo-min-1.png' />
            <h3>Feira CFH</h3>
          </div>
            <input placeholder='O que está procurando?' type="text" />
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/categorias'}>Categorias</Link>
                <Link to={'/produtos'}>Sobre</Link>
                <Link to={'/'}>Login</Link>
            </div>
        </header>
    </div>
    
  )
}
