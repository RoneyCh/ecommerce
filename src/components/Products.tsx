import { RouteComponentProps } from "@reach/router";
import React, { useEffect, useState } from "react";
import '../styles/products.scss';

export const Products:React.FunctionComponent<RouteComponentProps> = (props) => {
    const[dataProd,setDataProd] = useState<any[]>([]);

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
        <div className="prod">{dataProd.map(prod => (
            <div key={prod.id} className="prod-content">
                <div className="image"></div>
                <div>{prod.nome}</div>
                <div>{prod.preco}</div>
                </div>
        ))}</div>
        
    );
};


export default Products;