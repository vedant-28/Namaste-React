import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU, RESTAURANT_IMG_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard.component";
import { useParams } from "react-router-dom";

const RestMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
	const { resId } = useParams();

  const fetchRestaurantMenu = async () => {
    const menuData = await fetch(RESTAURANT_MENU + resId);
    const jsonMenuData = await menuData.json();
    console.log(jsonMenuData);
		setRestaurantInfo(jsonMenuData);
  };

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

	if (restaurantInfo === null) return <ShimmerCard />;
	const { name, cloudinaryImageId, locality, cuisines, costForTwoMessage } = restaurantInfo.data?.cards[0]?.card?.card?.info;
	const { itemCards } = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return (
    <div className="restautant-menu">
      <h2>{name}</h2>
			<img src={RESTAURANT_IMG_URL + cloudinaryImageId} />
			<h3>{locality}</h3>
      <h3>{cuisines.slice(0,5).join(", ")} - {costForTwoMessage}</h3>
			<ul className="menu-items">
				{
					itemCards?.map((item) => (
						<li key={item?.card.info.id}>
							{item?.card.info.name} -------- ₹{item?.card.info.price/100 || item?.card.info.defaultPrice/100}
						</li>
					))
				}
			</ul>
    </div>
  );
};

export default RestMenu;
