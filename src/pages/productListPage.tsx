import React, { useState, useContext, ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";

interface ProductListPageProps {
  nome: string;
  preco: string;
  id: number;
  categorias: Array<number>;
}

interface DataProdProps {
  dataProd: Array<ProductListPageProps>;
  dataCat: Array<{
    nome: string;
    id: number;
  }>;
} 

export const ProductListPage: React.FC<DataProdProps> = ({
  dataProd,
  dataCat,
}) => {
  const id = useParams();
  const product = dataProd.filter((prod) =>
    prod.categorias.find((x) => x.toString() === id.id)
  );
  const nomeCat = dataCat.filter((cat) => cat.id.toString() === id.id);
  //context
  const { cartHandler } = useContext(CartContext);

  return (
    <>
      <h1 style={{ padding: "1rem" }}>{nomeCat.map((nome) => nome.nome)}</h1>
      <div className="prodlist-content">
        {product.map((prod: { id: number; nome: string; preco: string }) => (
          <div className="prodlist">
            <Link
              className="prod-list"
              key={prod.id}
              to={`/categorias/${id.id}/${prod.id}`}
            >
              <div>
                <img
                  className="prod-img"
                  src="https://images.pexels.com/photos/6098361/pexels-photo-6098361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <div>
                  <div>{prod.nome}</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </Link>
            <div className="preco">
              <h2>R$ {prod.preco}</h2>
              <FontAwesomeIcon
                icon={faShoppingCart}
                onClick={() => console.log(cartHandler(prod.nome, prod.preco, prod.id))}
                cursor="pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
