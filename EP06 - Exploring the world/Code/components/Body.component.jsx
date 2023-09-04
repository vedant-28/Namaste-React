import React, { useEffect, useState } from "react";
import RestaurantCard from "./ResCard.component";
import ShimmerCard from "./ShimmerCard.component";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestList, setFilterdRestList] = useState([]);
  const [filterBtnName, setFilterBtnName] = useState("TOP RATED");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const restaurantData = await fetch(SWIGGY_API_URL);
    const jsonRestaurantData = await restaurantData.json();
    setResList(jsonRestaurantData?.data?.cards[5]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants);
    setFilterdRestList(jsonRestaurantData?.data?.cards[5]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants);
  };

  // Conditional rendering
  return resList.length === 0 ? (
    <div className="shimmer-card-container">
      <ShimmerCard />
    </div>
  ) : (
    <div className="body">
      <div className="search-bar">
        <input
          className="search-input"
          type="search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          placeholder="FIND YOUR FAVOURITE RESTAURANT HERE..."
        />
        <button 
          className="search-btn"
          onClick={() => {
            const searchRestaurantList = resList.filter(
              (restaurant) => restaurant?.info.name.toLowerCase().includes(searchText)
            );
            setFilterdRestList(searchRestaurantList);
          }}
        >
          SEARCH
        </button>
        <div className="filter-btn-div">
          <button
            className="filter-btn"
            onClick={() => {
              filterBtnName === "TOP RATED" ? setFilterBtnName("ALL") : setFilterBtnName("TOP RATED");
              const filteredResList = resList.filter(
                (restaurant) => restaurant?.info.avgRating > 4
              );
              filterBtnName === "TOP RATED" ? setFilterdRestList(filteredResList) : setFilterdRestList(resList);
            }}
          >
            {filterBtnName}
          </button>
        </div>
      </div>
      <div className="restaurant-card-container">
        {filteredRestList?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;