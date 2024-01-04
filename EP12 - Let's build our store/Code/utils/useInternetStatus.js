import { useEffect, useState } from "react";

const useInternetStatus = () => {
	const [internetStatus, setInternetStatus] = useState(true);

	useEffect(() => {
		addEventListener("offline", () => {
			setInternetStatus(false);
		});
	}, []);

	return internetStatus;
}

export default useInternetStatus;