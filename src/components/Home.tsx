import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import '../styles/home.scss'


const Home = (): JSX.Element => {
  const [dataCat, setDataCat] = useState<any[]>([]);

  useEffect(() => {
    const url = "https://mercadosocial.socialtec.net.br/api/categorias/";
    fetch(url, {method:'GET'})
        .then(response => response.json())
        .then(data => setDataCat(data))

  }, []);

  return (
    <div className="container">
      <div >
        <nav >
          <h1>Categorias</h1>
          <ul className="menu-container">
            {dataCat.map((cat) => (
              <li className="categories" key={cat.id}>{cat.nome}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="content">
          <Products />
      </div>
    </div>
  );
};

export default Home;
