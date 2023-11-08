import React from "react";
import { RESTAURANT_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="flex flex-col items-center m-[5px] w-[168px] h-[219px] bg-white flex-wrap cursor-pointer text-black no-underline hover:shadow-2xl">
      <img
        src={RESTAURANT_IMG_URL + resData?.cloudinaryImageId}
        className="w-[156px] h-[100px] m-[5px]"
      />
      <h3 className="uppercase m-[2px] text-sm font-medium">{resData?.name}</h3>
      <span className="uppercase m-[2px] text-xs">
        {resData?.cuisines.slice(0, 2).join(",")}
      </span>
      <span className="uppercase m-[2px] text-xs">⭐ {resData?.avgRating}</span>
    </div>
  );
};

// HOC: restaurant with less SLA (delivery time)
export const withLessSLA = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    // HOC
    return (
      <div>
        <span className="absolute inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-bold text-black ring-1 ring-inset ring-black">
          {resData?.sla.deliveryTime} Min away
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
