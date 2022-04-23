import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  const [dataCat, setDataCat] = useState<any[]>([]);

  useEffect(() => {
    const url = "https://mercadosocial.socialtec.net.br/api/categorias/";
    fetch(url, {method:'GET'})
        .then(response => response.json())
        .then(data => setDataCat(data))

  }, []);

  return (
    <div className="container">
      <div className="menu-container">
        <nav>
          <h1>Categorias</h1>
          <ul>
            {dataCat.map((cat) => (
              <li key={cat.id}>{cat.nome}</li>
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
