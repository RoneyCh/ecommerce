import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Link } from "react-router-dom";

export const CategoriesPage: React.FunctionComponent<any> = ({dataCat}) => {
  return (
    <div className="container">
      <div >
        <nav >
          <h1>Categorias</h1>
          <ul className="menu-container">
            {dataCat.map((cat: {id:number; nome:string}) => (
              <li className="categories" key={cat.id}>
                <Link to={`/categorias/${cat.id}`}>{cat.nome}</Link>
                </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="content">

      </div>
    </div>
  );
};
