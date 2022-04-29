import React, { useState, useEffect } from "react";
import { RouteComponentProps, useNavigate } from "@reach/router";
import { Link } from "react-router-dom";
import { CategoriesPage } from "../pages/categoriesPage";

interface CategoriesProps {
  dataCat: Array<{
    nome: string;
    id: number
    imagem: string
  }>;
  setDataCat: any
}

export const Categories:React.FunctionComponent<CategoriesProps> = ({dataCat, setDataCat}) => {

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
