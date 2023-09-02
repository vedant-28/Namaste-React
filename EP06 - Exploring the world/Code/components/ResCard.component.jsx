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
  console.log(props);

  return (
    <div className="restaurant-card">
      <img src={RESTAURANT_IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <span>{cuisines.slice(0, 2).join(",")}</span>
      {/* <span>{cuisines}</span> */}
      <span>⭐ {avgRating}</span>
    </div>
  );
};

export default RestaurantCard;