import React from "react";

interface ProductsPageProps {
  nome: string;
  preco: string;
  id: number
}

interface DataProdProps {
  dataProd: Array<ProductsPageProps>
}

export const ProductsPage: React.FunctionComponent<DataProdProps> = ({ dataProd }) => {

  return (

    <div className="prod">
      {dataProd.map((prod: { id: number; nome: string; preco: string }) => (
        <div key={prod.id} className="prod-content">

        </div>
      ))}
    </div>
    
  );
};
