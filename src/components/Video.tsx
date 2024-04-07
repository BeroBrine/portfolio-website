import GithubLogo from "./svgs/GithubLogo";
import React, { useEffect, useRef, useState } from "react";
import bgVid from "../assets/myPics/bgVid.mp4";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import Magnetic from "./Magnetic";

const Video = () => {
	const ref = useRef<HTMLDivElement>(null);
	return (
		<div id="container">
			<Cursor stickyElement={ref} />
			<Navbar homepage={true} showByDefault={true} />
			<div id="hello">
				<video
					id="video"
					className="h-[calc(100dvh)] w-full absolute object-cover -z-10 "
					autoPlay
					loop
				>
					<source src={bgVid} type="video/mp4" />
				</video>
			</div>
			<div className="  flex-col flex justify-center items-center h-screen text-white  mx-auto">
				<span className="text-6xl font-jetBrains font-semibold">
					Hi.&#128075;
				</span>
				<span className="text-6xl font-jetBrains font-semibold">
					I'm Abhishek
				</span>

				<span className="type-fruit text-6xl font-jetBrains font-semibold"></span>

				<Magnetic>
					<div
						ref={ref}
						className=" items-center relative    w-40 h-40 flex justify-center py-2"
					>
						<GithubLogo className={"h-16  w-16 fill-white cursor-pointer "} />
					</div>
				</Magnetic>
			</div>
		</div>
	);
};

export default Video;
