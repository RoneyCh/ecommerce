import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../contexts/CartContext";

interface ProductListPageProps {
  title: string;
  price: string;
  id: number;
  category: string;
  image: string;
  qty?:number
}

interface DataProdProps {
  dataProd: Array<ProductListPageProps>;
  dataCat: Array<string>;
}

export const ProductListPage: React.FC<DataProdProps> = ({
  dataProd,
  dataCat,
}) => {
  const id = useParams();
  const product = dataProd.filter((prod) => prod.category === id.id);
  //context
  const { cartHandler } = useContext(CartContext);

  return (
    <>
      <h1 style={{ padding: "1rem" }}>{id.id}</h1>
      <div className="prodlist-content">
        {product.map(
          (prod: {
            title: string;
            price: string;
            id: number;
            image: string;
          }) => (
            <div className="prodlist">
              <Link
                className="prod-list"
                key={prod.id}
                to={`/categorias/${id.id}/${prod.id}`}
              >
                <div>
                  <img
                    className="prod-img"
                    src={prod.image}
                    alt=""
                  />
                  <div>
                    <div className="prod-title">{prod.title}</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="preco">
                <h2>$ {prod.price}</h2>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  onClick={() => cartHandler(prod.title, prod.price, prod.id, prod.image)}
                  cursor="pointer"
                />
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
