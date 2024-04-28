import { ReactNode, createContext, useState } from "react"

export const CartContext = createContext(null);
CartContext.displayName = "Carrinho"

export const CartProvider = ({ children }:{children: ReactNode}) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    
    return (
        <CartContext.Provider value={{
            shoppingCart, setShoppingCart
        }}>
            {children}
        </CartContext.Provider>
    )
}