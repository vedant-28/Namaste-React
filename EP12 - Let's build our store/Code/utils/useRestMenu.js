import { useEffect, useState } from 'react';
import { RESTAURANT_MENU } from "../utils/constants";

const useRestMenu = (resId) => {
	const [restMenuInfo, setRestMenuInfo] = useState(null);

	const fetchRestaurantData = async () => {
		const restMenuData = await fetch(RESTAURANT_MENU + resId);
		const jsonRestMenuData = await restMenuData.json();
		console.log(jsonRestMenuData.data);
		setRestMenuInfo(jsonRestMenuData.data);
	};

	useEffect(() => {
		fetchRestaurantData();
	}, []);
	return restMenuInfo;
}

export default useRestMenu;