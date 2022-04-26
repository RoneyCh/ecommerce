import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Link } from "react-router-dom";

interface CategoriesPageProps {
  nome: string;
  id: number
}

interface DataCatProps {
  dataCat: Array<CategoriesPageProps>
}

export const CategoriesPage: React.FunctionComponent<DataCatProps> = ({dataCat}) => {
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
