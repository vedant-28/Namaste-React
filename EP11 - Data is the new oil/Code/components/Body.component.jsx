import React, { useEffect, useState } from "react";
import RestaurantCard, { withLessSLA } from "./ResCard.component";
import ShimmerCard from "./ShimmerCard.component";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRestList, setFilterdRestList] = useState([]);
  const [filterBtnName, setFilterBtnName] = useState("TOP RATED");
  const [searchText, setSearchText] = useState("");

  console.log("resList===>", resList);
  const RestaurantWithLessSLA = withLessSLA(RestaurantCard);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const restaurantData = await fetch(SWIGGY_API_URL);
    const jsonRestaurantData = await restaurantData.json();
    console.log('data===>', jsonRestaurantData);
    setResList(
      jsonRestaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestList(
      jsonRestaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const internetStatus = useInternetStatus();
  if (internetStatus === false) {
    return (
      <h1 className="bg-gradient-to-r from-tangerine-faint to-tangerine-deep text-center py-[10px] px-[255px] m-[5px]">
        You are offline! Please check internet connection...
      </h1>
    );
  }

  // Conditional rendering
  return resList?.length === 0 ? (
    <div className="flex flex-row items-center flex-wrap bg-white">
      <ShimmerCard />
    </div>
  ) : (
    <div className="body">
      <div className="flex flex-row items-center justify-center p-[10px] mt-[5px] bg-gradient-to-r from-tangerine-faint to-tangerine-deep">
        <input
          className="w-[425px] m-[10px] h-[40px] hover:border-black border-transparent focus:outline-none border"
          type="search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          placeholder="FIND YOUR FAVOURITE RESTAURANT HERE..."
        />
        <button
          className="m-[10px] w-[100px] h-[40px] bg-white hover:border-black border-transparent border cursor-pointer uppercase"
          onClick={() => {
            const searchRestaurantList = resList.filter((restaurant) =>
              restaurant?.info.name.toLowerCase().includes(searchText)
            );
            setFilterdRestList(searchRestaurantList);
          }}
        >
          SEARCH
        </button>
        <div className="filter-btn-div">
          <button
            className="m-[10px] w-[100px] h-[40px] bg-white hover:border-black border-transparent border cursor-pointer uppercase"
            onClick={() => {
              filterBtnName === "TOP RATED"
                ? setFilterBtnName("ALL")
                : setFilterBtnName("TOP RATED");
              const filteredResList = resList.filter(
                (restaurant) => restaurant?.info.avgRating > 4
              );
              filterBtnName === "TOP RATED"
                ? setFilterdRestList(filteredResList)
                : setFilterdRestList(resList);
            }}
          >
            {filterBtnName}
          </button>
        </div>
      </div>
      <div className="mt-[5px] flex flex-wrap bg-gradient-to-r from-tangerine-faint to-tangerine-deep">
        {filteredRestList?.map((restaurant) => (
          <Link
            className="text-black no-underline"
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.sla?.deliveryTime < 30 ? (
              <RestaurantWithLessSLA resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
