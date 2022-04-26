import React from "react";

export const ProductsPage: React.FunctionComponent<any> = ({ dataProd }) => {
  console.log(dataProd)
  return (
    <div className="prod">
      {dataProd.map((prod: { id: number; nome: string; preco: string }) => (
        <div key={prod.id} className="prod-content">
          <div className="image"></div>
          <div>{prod.nome}</div>
          <div>{prod.preco}</div>
        </div>
      ))}
    </div>
  );
};
