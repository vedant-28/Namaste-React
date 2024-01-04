import { RESTAURANT_IMG_URL } from "../utils/constants";
import ShimmerCard from "./ShimmerCard.component";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import ResMenuCategory from "./ResMenuCategory.component";
import { useState } from "react";

const RestMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) {
    return (
      <div className="flex flex-row">
        <ShimmerCard />
      </div>
    );
  }
  const { name, cloudinaryImageId, locality, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      .card;

  // console.log(
  //   "itemCards===>",
  //   restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="flex flex-col items-center w-[800px] mt-[25px] mb-0 mx-auto cursor-default bg-gradient-to-r from-tangerine-faint to-tangerine-deep">
        <h2 className="text-2xl m-[10px] font-bold">{name}</h2>
        <img
          src={RESTAURANT_IMG_URL + cloudinaryImageId}
          className="w-[250px]"
        />
        <h3 className="m-[10px] font-semibold">{locality}</h3>
        <h3 className="m-[10px] font-semibold">
          {cuisines.slice(0, 5).join(", ")} - {costForTwoMessage}
        </h3>
      </div>
      <div>
        {/*Category wise accordian logic --> */}
        {categories.map((category, index) => (
          // Controlled component:
          <ResMenuCategory
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            showIndex={showIndex === index ? true : false}
            setShowIndex={(index) => setShowIndex(index)}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default RestMenu;
