import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
import { ProductsPage } from "../pages/productsPage";

interface ProdProps {
    dataProd: Array<{
        nome: string;
        preco: string;
        id: number}>;
    setDataProd: any
}

export const Products:React.FunctionComponent<ProdProps> = ({dataProd, setDataProd}) => {
    
    useEffect(() => {
        const getProd = async () => {
            const response = await fetch('https://mercadosocial.socialtec.net.br/api/produtos/');
            const data = await response.json();
            setDataProd(data);
        }
        getProd();
    },[])

    return ( 
        <ProductsPage dataProd={dataProd}/>
        
    );
};


export default Products;