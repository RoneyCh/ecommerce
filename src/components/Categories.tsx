import React, { useEffect } from "react";
import { CategoriesPage } from "../pages/categoriesPage";

interface CategoriesProps {
  dataCat: Array<string>
  setDataCat: any
}

export const Categories:React.FunctionComponent<CategoriesProps> = ({dataCat, setDataCat}) => {

  useEffect(() => {
    const url = "https://fakestoreapi.com/products/categories";
    fetch(url, {method:'GET'})
        .then(response => response.json())
        .then(data => setDataCat(data))

  }, [setDataCat]);

  return (
    <CategoriesPage dataCat={dataCat}/>
  );
};
