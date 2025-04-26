"use client"; // Add this at the top for client-side rendering

import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import { food_list } from "@/constants/data"; // Assuming you have a food list with item details
import Image from "next/image";

const CartInfo = () => {
  const { cartItem, getTotalCartAmount, RemoveFromCart } =
    useContext(StoreContext);

  // Calculate total number of items in the cart
  const totalItems = Object.values(cartItem).reduce((acc, qty) => acc + qty, 0);

  return (
    <div className="cart mt-12 px-4 sm:px-8 lg:px-12 bg-white rounded-lg shadow-lg">
      <div className="cart-items mb-10">
        <div className="cart-items-title grid grid-cols-6 gap-4 text-gray-600 text-sm font-medium border-b pb-3">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="bg-gray-200 h-[1px] my-4" />

        {food_list.map((v, index) => {
          if (cartItem[v._id] > 0) {
            return (
              <div
                className="cart-items-title cart-items-item grid grid-cols-6 gap-4 items-center text-gray-800 my-3 p-3 border-b"
                key={index}
              >
                <div>
                  <div className="relative w-12 h-12">

                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className=" object-cover rounded-md"
                    />
                    </div>
                </div>
                <p className="text-lg font-semibold">{v.name}</p>
                <p className="text-lg">${v.price}</p>
                <p className="text-lg">{cartItem[v._id]}</p>
                <p className="text-lg">${v.price * cartItem[v._id]}</p>
                <p
                  className="cross-btn text-red-500 cursor-pointer text-xl font-semibold hover:text-red-600 transition duration-200"
                  onClick={() => RemoveFromCart(v._id)}
                >
                  X
                </p>
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom mt-8 flex flex-col sm:flex-row justify-between gap-10 py-10 px-4 bg-gray-100 rounded-lg shadow-md">
        <div className="cart-total flex flex-col md:gap-6 flex-1">
          <h2 className="text-xl font-semibold">Cart Total</h2>
          <div className="cart-total-details flex justify-between text-gray-600">
            <p>SubTotal</p>
            <p className="font-medium">${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details flex justify-between text-gray-600">
            <p>Delivery Fee</p>
            <p className="font-medium">${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <div className="cart-total-details flex justify-between font-bold text-xl">
            <p>Total</p>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>

          <button
            className="bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-200 w-full sm:w-[min(15vw,200px)]"
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
