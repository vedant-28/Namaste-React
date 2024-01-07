import React from "react";
import ResMenuItemList from "./ResMenuItemList.component";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // subscribing store to get items added in cart
  const dispatch = useDispatch();
  const handleClearCartClick = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="flex items-center justify-evenly p-[10px] mt-[5px] bg-gradient-to-r from-tangerine-faint to-tangerine-deep">
        <h2 className="text-xl font-medium pr-[130px]">CART:</h2>
        <button
          className="m-[10px] h-[35px] p-[5px] bg-white hover:border-black border-transparent border cursor-pointer uppercase"
          onClick={handleClearCartClick}
        >
          CLEAR CART
        </button>
      </div>
      <div className="flex items-center justify-center w-6/12 my-[5px] mx-[313px] bg-gradient-to-r from-tangerine-faint to-tangerine-deep p-[10px] mt-[5px]">
        <ResMenuItemList items={cartItems} />
        {cartItems.length === 0 && (
          <h2 className="text-lg font-medium">Cart is empty...</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
