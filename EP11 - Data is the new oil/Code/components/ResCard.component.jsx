import React from "react";
import { RESTAURANT_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines
  } = resData;

  return (
    <div className="flex flex-col items-center m-[5px] w-[168px] h-[219px] bg-white flex-wrap cursor-pointer text-black no-underline hover:shadow-2xl">
      <img src={RESTAURANT_IMG_URL + cloudinaryImageId} className="w-[156px] h-[100px] m-[5px]"/>
      <h3 className="uppercase m-[2px] text-sm font-medium">{name}</h3>
      <span className="uppercase m-[2px] text-xs">{cuisines.slice(0, 2).join(",")}</span>
      <span className="uppercase m-[2px] text-xs">⭐ {avgRating}</span>
    </div>
  );
};

export default RestaurantCard;