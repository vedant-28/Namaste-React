import React from "react";
import { RESTAURANT_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="restaurant-card">
      <img src={RESTAURANT_IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <span>{cuisines.slice(0, 2).join(", ")}</span>
      <span>⭐ {avgRating}</span>
    </div>
  );
};

export default RestaurantCard;