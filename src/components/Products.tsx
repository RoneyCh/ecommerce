import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
import '../styles/products.scss';
import { ProductsPage } from "../pages/productsPage";

export const Products:React.FunctionComponent<any> = ({dataProd, setDataProd}) => {
    

    useEffect(() => {
        const getProd = async () => {
            const response = await fetch('https://mercadosocial.socialtec.net.br/api/produtos/');
            const data = await response.json();
            setDataProd(data);
            console.log(data);
        }
        getProd();
    },[])

    return ( 
        <ProductsPage dataProd={dataProd}/>
        
    );
};


export default Products;