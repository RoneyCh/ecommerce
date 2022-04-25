import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { Link } from 'react-router-dom'

export const Nav:React.FunctionComponent<RouteComponentProps> = (props) =>{

  return (
    <div>
        <header className='heading'>
            <input placeholder='O que está procurando?' type="text" />
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/categorias'}>Categorias</Link>
                <Link to={'/produtos'}>Produtos</Link>
            </div>
        </header>
    </div>
    
  )
}
