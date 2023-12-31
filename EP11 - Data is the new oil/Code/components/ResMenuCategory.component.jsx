import React, { useState } from "react";
import arrowDownLogo from "../assets/arrow-down-logo.svg";
import ResMenuItemList from "./ResMenuItemList.component";

const ResMenuCategory = ({ data, showItems, index, showIndex, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(); // ToBe used in case on controlled comps; i.e. State will be local for each children comp.

  const clickHandler = () => {
    console.log("clicked===>", showItems);
    // setShowItems(!showItems); // ToBe used in case on controlled comps; i.e. State will be local for each children comp.
    showIndex ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div>
      <div className="font-semibold w-[800px] mt-[6px] mx-auto p-3 shadow-lg cursor-pointer bg-gradient-to-r from-tangerine-faint to-tangerine-deep">
        <div className="flex justify-between" onClick={clickHandler}>
			    <span>{data.title} ({data.itemCards.length})</span>
			    <img className="w-[27px]" src={arrowDownLogo}/>
        </div>
        {showItems && <ResMenuItemList items={data?.itemCards}/>}
      </div>
    </div>
  );
};

export default ResMenuCategory;
