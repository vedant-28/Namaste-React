import React, { useState } from "react";
import RestaurantCard from "./restaurantCard.component";
import { restaurantList } from "../utils/restaurantData";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="FIND YOUR FAVOURITE RESTAURANT HERE..."
        />
        <button className="search-btn">search</button>
        <div className="filter-btn-div">
          <button 
            className="filter-btn"
            onClick={() => {
              const filteredResList = resList.filter(
                (restaurant) => restaurant.data.avgRating > 4
              );
              setResList(filteredResList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="restaurant-card-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;