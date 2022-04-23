import React, { useEffect, useState } from "react";


const Products = () => {
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
        <div>{dataProd.map(prod => (
            <div key={prod.id}>
                <img src={`https://mercadosocial.socialtec.net.br${prod.midia_list[3]}`} />
                <div>{prod.nome}</div>
                <div>{prod.preco}</div>
                </div>
        ))}</div>
        
    );
};


export default Products;