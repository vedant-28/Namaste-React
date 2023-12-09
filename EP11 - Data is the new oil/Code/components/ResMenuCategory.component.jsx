import React from "react";
import arrowDownLogo from "../assets/arrow-down-logo.svg";

const ResMenuCategory = ({ data }) => {
	console.log("MenuCategories===>", data);
  return (
    <div className="flex justify-between font-semibold w-[800px] mt-[6px] mx-auto p-3 shadow-lg cursor-pointer bg-gradient-to-r from-tangerine-faint to-tangerine-deep">
			<span>{data.title} ({data.itemCards.length})</span>
			<img className="w-[27px]" src={arrowDownLogo}/>
    </div>
  );
};

export default ResMenuCategory;
