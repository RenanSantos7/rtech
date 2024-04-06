import { createContext, useState, useEffect, ReactNode } from "react"
import dadosProdutos from '../../public/data/data.ts'

export const DataContext = createContext(null);
DataContext.displayName = "rTech"

export const DataProvider = ({ children }:{ children:ReactNode }) => {
    const [produtos, setProdutos] = useState([...dadosProdutos]);
    
    return (
        <DataContext.Provider value={{
            produtos, setProdutos
        }}>
            {children}
        </DataContext.Provider>
    )
}