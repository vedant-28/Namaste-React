import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResCard.component";
import Loader from "../assets/PacMan-Loader-SVG.svg";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const restaurantData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const jsonRestaurantData = await restaurantData.json();
    setResList(jsonRestaurantData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (resList.length === 0) {
    return <img src={Loader} alt="Pacman" />
  }

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
        {resList?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;