import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Link } from "react-router-dom";

interface CategoriesPageProps {
  nome: string;
  id: number
  imagem: string
}

interface DataCatProps {
  dataCat: Array<CategoriesPageProps>
}

export const CategoriesPage: React.FunctionComponent<DataCatProps> = ({dataCat}) => {
  return (
    <div>
        <nav className="container">
          <h1>Categorias</h1>
          <ul className="menu-container">
            {dataCat.map((cat: {id:number; nome:string; imagem: string}) => (
              <li className="categories" key={cat.id}>
                <Link to={`/categorias/${cat.id}`}>
                  <img src={cat.imagem} />
                  <div>{cat.nome}</div>
                </Link>
                </li>
            ))}
          </ul>
        </nav>
      <div className="content">

      </div>
    </div>
  );
};
