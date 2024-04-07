import LapMockup from "../LapMockup";
import evening from "../../assets/myPics/evening-sky.png";
import { useEffect, useRef, useState } from "react";
import { useVariants, spring } from "../../hooks/followMouse";
import { motion } from "framer-motion";
import Cursor from "../Cursor";
import Navbar from "../Navbar";

const Linux = () => {
	return (
		<div>
			<Cursor />
			<Navbar showByDefault={false} />
			<div>
				<img
					className=" absolute h-screen w-full -z-10"
					src="https://png.pngtree.com/background/20230401/original/pngtree-cyberpunk-city-purple-background-picture-image_2252484.jpg"
					alt="evening"
				/>
			</div>
			<div className="backdrop-filter backdrop-blur-sm bg-opacity-10 h-screen w-full z-0 absolute"></div>
			<LapMockup />
			<LapMockup />
			<LapMockup />
			<LapMockup />
			<LapMockup />
			<LapMockup />
		</div>
	);
};

export default Linux;
