import React from "react";
import { RESTAURANT_IMG_URL } from "../utils/constants";

const ResMenuItemList = ({ items }) => {
  return (
    <div>
			{items.map(item => (
        <div key={item.card.info.id} className="border-black border-b-[1px] p-4 flex items-center justify-between">
          <div className="w-9/12">
            <div className="py-[2px]">
              <span>{item?.card?.info?.name}&nbsp;&nbsp;&nbsp;</span>
              <span>₹{item?.card?.info?.price/100}</span>
            </div>
            <p className="font-light">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
          <div className="absolute pl-[134px]">
              <button className="bg-orange-200 border-black rounded-full p-2 text-sm ring-1 ring-inset ring-black">
                Add +
              </button>
            </div>
            <img src={RESTAURANT_IMG_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuItemList;
