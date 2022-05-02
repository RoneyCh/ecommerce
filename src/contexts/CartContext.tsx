import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';

interface cartProps{
    nome: string
    preco: string
    id: number
}
type childrenP = {
    children: ReactNode
}

const CartContextProps = {
    cartHandler: (nome:string, preco:string, id: number) => {},
    cart: [{}]
}



export const CartContext = createContext(CartContextProps);


export default function CartProvider({ children }:childrenP){ 

    const [cart, setCart] = useState<cartProps[]>([])

    const cartHandler = (nome: string, preco: string, id: number) => {
        const item = {nome, preco, id}
        setCart([...cart, item]);
        console.log(cart);
      }
      
    return (
        <CartContext.Provider value={{cart, cartHandler}}>{children}</CartContext.Provider>
    )

};
