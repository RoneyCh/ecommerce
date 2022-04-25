import React, { useState, useEffect } from "react";
import '../styles/home.scss'
import { RouteComponentProps, useNavigate } from "@reach/router";
import { Link } from "react-router-dom";
import { CategoriesPage } from "../pages/categoriesPage";

const Home:React.FunctionComponent<RouteComponentProps> = (props) => {
  const [dataCat, setDataCat] = useState<any[]>([]);

  useEffect(() => {
    const url = "https://mercadosocial.socialtec.net.br/api/categorias/";
    fetch(url, {method:'GET'})
        .then(response => response.json())
        .then(data => setDataCat(data))

  }, []);

  return (
    <CategoriesPage dataCat={dataCat}/>
  );
};

export default Home;
