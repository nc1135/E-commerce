import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext =createContext(null);

const ShopContextProvider = (props) => {
    
    const contextValue ={all_product};
    
    return (
        <ShopContsxt.Provider value={contextValue}>
            {props.children};
        </ShopContsxt.Provider>
  )
}

export default ShopContextProvider;