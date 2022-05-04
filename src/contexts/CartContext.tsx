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
    removeItem:(clickedItemIndex: number) => {},
    cart: [{nome: '', preco: '', id: 5000}],
    clearCart: () => {} 
}


export const CartContext = createContext(CartContextProps);


export default function CartProvider({ children }:childrenP){ 

    const [cart, setCart] = useState(CartContextProps.cart)

    const cartHandler = (nome: string, preco: string, id: number) => {
        const item = {nome, preco, id}
        setCart([...cart, item]);
        console.log(cart);
      }

    const removeItem = (clickedItemIndex:number) => {
        const filterCart = cart.filter(prod => prod.id !== clickedItemIndex);
        setCart(filterCart);
    }

    const clearCart = () => {
        setCart(CartContextProps.cart);
    }
      
    return (
        <CartContext.Provider value={{cart, cartHandler,removeItem, clearCart}}>{children}</CartContext.Provider>
    )

};
