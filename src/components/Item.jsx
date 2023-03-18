import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useAtom, atom } from "jotai";

export const GLOBAL_CART = atom([]);
export const TOTAL = atom(0);


const Item = (params) => {
  const [cart, setCart] = useAtom(GLOBAL_CART);
  const [total, setTotal] = useAtom(TOTAL);

  const addItemToCart = (item) => {
    if (item) {
      console.log("Item added to Cart");
      setTotal(() => total + parseInt(item.rentalPrice));
      setCart((cart) => [...cart, item]);
    }
  };

  return (
    <div className="flex flex-col m-2 border shadow-lg lg:w-1/4 md:w-1/4 bg-slate-50">
      <div className="relative flex-1 block max-h-screen overflow-hidden rounded">
        <img
          alt="ecommerce"
          className="block object-cover object-center w-full h-full border-none"
          src={params.imageURL}
        />
      </div>
      <div className="p-4 flex-3">
        <h2 className="text-lg font-medium text-gray-900 title-font">
          {params.fulhausProductName}
        </h2>

        <h2 className="flex mb-1 text-lg tracking-widest text-yellow-200 title-font">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </h2>

        <div className="flex justify-between mt-1">
          <p className="text-gray-900">${params.rentalPrice}</p>
          <button
            className="mx-3 text-2xl text-gray-700 hover:text-green-400"
            onClick={() => addItemToCart(params)}
          >
            <BsFillCartPlusFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
