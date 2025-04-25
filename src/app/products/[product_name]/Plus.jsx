"use client";
import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext"; // Import context

const Plus = ({ id }) => {
  // Use the context to access cartItem and the functions
  const { cartItem, AddToCart, RemoveFromCart } = useContext(StoreContext);

  return (
    <div className="flex items-center justify-between">
      <h4 className="text-amber-900 font-bold">Quantity:</h4>
      <div className="flex p-2 border items-center justify-center border-slate-200">
        <button
          className="border-r border-slate-200 px-3"
          onClick={() => RemoveFromCart(id)} // Remove from cart when - button is clicked
        >
          -
        </button>
        <p className="px-2">{cartItem[id] || 0}</p>{" "}
        {/* Display current quantity */}
        <button
          className="border-l border-slate-200 px-3"
          onClick={() => AddToCart(id)} // Add to cart when + button is clicked
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Plus;
