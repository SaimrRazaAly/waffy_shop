"use client";

import { useContext } from "react";
import { StoreContext } from "@/context/StoreContext";
import { food_list } from "@/constants/data";
import Image from "next/image";
import Page_Hero_Banner from "@/Components/Page_Hero_Banner";
import Plus from "../products/[product_name]/Plus";
import Border_Btn from "@/Components/Border_Btn";
import Link from "next/link";

const CartInfo = () => {
  const { cartItem, getTotalCartAmount, RemoveFromCart, reset } =
    useContext(StoreContext);

  return (
    <>
      <Page_Hero_Banner title="Cart" />

      <div className="py-12 mt-12 px-4 sm:px-8 lg:px-12">
        <h3 className="main_text text-2xl font-semibold mb-6">Products</h3>

        <div className="flex flex-col md:flex-row mx-auto gap-6 justify-between px-5">
          <div className="flex md:basis-[50%] flex-col items-center justify-center gap-6">
            {food_list.filter((v) => cartItem[v._id] > 0).length > 0 ? (
              food_list.map((v, index) => {
                if (cartItem[v._id] > 0) {
                  return (
                    <div
                      key={index}
                      className="relative border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col md:flex-row md:gap-5 w-full items-center bg-white"
                    >
                      <div
                        className="absolute top-2 left-2 w-[30px] h-[30px] rounded-full text-amber-900 border flex items-center justify-center border-amber-900 font-bold text-lg cursor-pointer hover:border-amber-900 hover:bg-amber-400 transition"
                        onClick={() => reset(v._id)}
                      >
                        <h2>X</h2>
                      </div>

                      <div className="relative w-full h-60 mt-12 mb-4">
                        <Image
                          src={v.image}
                          alt={v.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>

                      <div className="text-center space-y-2">
                        <p className="text-lg font-semibold">{v.name}</p>
                        <p className="text-gray-600">${v.price}</p>
                        <Plus id={v._id} notitle={false} />
                        <p className="text-base font-medium">
                          Total: ${v.price * cartItem[v._id]}
                        </p>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div className="text-center my-12 space-y-4">
                <h1 className="text-xl font-semibold text-gray-700">
                  No Item in Cart. Start shopping now!
                </h1>
                <Link href="/collections/all">
                  <Border_Btn title={"Shop Now"} />
                </Link>
              </div>
            )}
          </div>
          {/*  mroe info*/}
          <div className=" md:my-2 my-10">
            <div className="flex gap-4 mb-4">
              <Border_Btn title={"Continue Shoping"} />
              <Border_Btn title={"Update Cart"} />
            </div>
            <div>
              <h3 className="main_text text-2xl">order summary</h3>
              <h5 className="main_text text-[16px]  my-2 !font-medium">
                order summary : $
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}
              </h5>
              <Border_Btn title={"Add a note to your order"} />
            </div>
            <p className="py-4">
              shipping ,taxes and dicsounts will be calculated at checkout
            </p>
            <div className="flex  justify-center flex-col gap-2">
              <Border_Btn title={"Proceed to Checkout"} />
              <Border_Btn title={"Get Shipping estimates"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartInfo;
