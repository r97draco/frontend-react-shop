import React from "react";
import { GLOBAL_CART } from "./Item";
import { useAtom } from "jotai";
import { TOTAL } from "./Item";
import { GrClose } from "react-icons/gr";

export default function Offcanvas({ children, isOpen, setIsOpen }) {
  const [cart] = useAtom(GLOBAL_CART);
  const [total] = useAtom(TOTAL);

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative flex flex-col w-screen h-full max-w-lg pt-10 pb-10 space-y-6 overflow-y-scroll">
          <header className="flex justify-between p-4 text-4xl font-bold">
            <h1>My Order</h1>
            <button onClick={() => setIsOpen(!isOpen)}>
              <GrClose />
            </button>
          </header>
          {children}
          {cart.length > 0 &&
            cart.map((product, idx) => (
              <div className="flex flex-row p-4 m-4 border" key={idx}>
                <div className="relative flex-1 block w-1/3 max-h-screen overflow-hidden rounded ">
                  <img
                    alt="ecommerce"
                    className="block object-cover object-center border-none w-50 h-50"
                    src={product.imageURL}
                  />
                </div>
                <div className="flex flex-col justify-between w-1/2 px-4 py-6 flex-4 ">
                  <h2 className="text-lg font-medium text-gray-900 title-font">
                    {product.fulhausProductName}
                  </h2>

                  <div className="flex flex-row justify-between">
                    <div className="flex justify-between mt-1">
                      <p className="text-gray-900">${product.rentalPrice}</p>
                    </div>
                    <div className="mt-1 text-base text-bold">1X</div>
                  </div>
                </div>
              </div>
            ))}

          <div className="flex justify-between px-4 text-3xl text-black">
            <p className="">Total</p>
            <p className="pl-5">${total}</p>
          </div>
          <button className="mx-auto text-4xl text-white bg-black border border-black rounded-none justify-self-center border-6 h-100 text-bold w-80 fill-black hover:opacity-40">
            CHECKOUT
          </button>
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
