import React, {createContext, ReactNode, useState} from 'react';

type childrenP = {
    children: ReactNode
}

const CartContextProps = {
    cartHandler: (nome:string, preco:string, id: number, image: string, qty?:number, ) => {},
    removeItem:(clickedItemIndex: number) => {},
    cart: [{nome: '', preco: '', id: 5000, image:'', qty:0}],
    clearCart: () => {} 
}


export const CartContext = createContext(CartContextProps);


export default function CartProvider({ children }:childrenP){ 

    const [cart, setCart] = useState(CartContextProps.cart)

    const cartHandler = (nome: string, preco: string, id: number,image: string, qty?:number) => {
        const item = {nome, preco, id, image}
        const exist = cart.find(prod => prod.id === item.id) 
        if(exist) {
            setCart(cart.map(prod => prod.id ===  item.id ? {...exist, qty: exist.qty + 1}: prod))
        } else {
            setCart([...cart, {...item, qty: 1}]);
        }
        
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
