"use client";

import { createContext, useState, useEffect } from "react";
import { food_list } from "@/constants/data";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const reset = (itemid) => {
    setCartItem((prev) => ({ ...prev, [itemid]: 0 }));
  };

  const AddToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const RemoveFromCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) - 1),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  const contextValue = {
    food_list,
    cartItem,
    AddToCart,
    RemoveFromCart,
    getTotalCartAmount,
    reset,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
