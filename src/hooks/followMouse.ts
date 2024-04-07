import useMouse from "@react-hook/mouse-position";
import { useEffect, useState } from "react";

export const useVariants = (ref: React.MutableRefObject<null>) => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	useEffect(() => {
		window.addEventListener("mousemove", (e: MouseEvent) => {
			console.log(e.clientY);
			console.log(e.clientX);
			setMousePos({ x: e.clientX, y: e.clientY });
		});
	}, []);

	return {
		default: {
			opacity: 1,
			height: 10,
			width: 10,
			fontSize: "20px",
			backgroundColor: "#13ACDE",
			x: mousePos.x,
			y: mousePos.y,
			transition: {
				type: "spring",
				mass: 0.6,
			},
		},
		buy: {
			opacity: 1,
			backgroundColor: "#29B550",
			color: "#000",
			height: 64,
			width: 64,
			x: mousePos.x - 32,
			y: mousePos.y - 32,
		},
		sell: {
			opacity: 1,
			backgroundColor: "#EF5151",
			color: "#000",
			height: 64,
			width: 64,
			x: mousePos.x - 48,
			y: mousePos.y - 48,
		},
	};
};

export const spring = {
	type: "spring",
	stiffness: 500,
	damping: 28,
};
