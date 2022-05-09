import React from "react";
import { Link } from "react-router-dom";

interface CategoriesPageProps {
  dataCat: Array<string>
}

export const CategoriesPage: React.FunctionComponent<CategoriesPageProps> = ({dataCat}) => {
  return (
    <div>
        <nav className="container">
          <h1>Categorias</h1>
          <ul className="menu-container">
            {dataCat.map((cat: string) => (
              <li className="categories">
                <Link to={`/categorias/${cat}`}>
                  <div>{cat}</div>
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
