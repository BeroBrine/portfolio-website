import GithubLogo from "./svgs/GithubLogo";
import { useRef, useState } from "react";
import bgVid from "../assets/myPics/bgVid.mp4";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import Magnetic from "./Magnetic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HomePage = () => {
	const githubRef = useRef<HTMLDivElement>(null);
	const textDiv = useRef<HTMLDivElement>(null);
	const [cursorSize, setCursorSize] = useState<number>(15);

	useGSAP(
		() => {
			gsap.from([textDiv.current, githubRef.current], {
				opacity: 0,
				duration: 2,
				y: 40,
				scale: 1.11,
				stagger: 0.8,
			});
		},
		{ scope: textDiv },
	);

	return (
		<div id="container" className="">
			<Navbar homepage={true} />
			<video
				id="video"
				className="h-screen w-full absolute object-cover -z-10 "
				autoPlay
				loop
			>
				<source src={bgVid} type="video/mp4" />
			</video>
			<div
				ref={textDiv}
				className=" opacity-1 flex-col flex justify-center items-center h-screen text-white  mx-auto"
			>
				<Magnetic>
					<span
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(20)}
						className="text-2xl sm:text-4xl md:text-6xl cursor-none font-jetBrains font-semibold"
					>
						Hi.&#128075;
					</span>
				</Magnetic>
				<Magnetic>
					<span
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(20)}
						className="text-2xl sm:text-4xl md:text-6xl cursor-none font-jetBrains font-semibold"
					>
						I'm Abhishek
					</span>
				</Magnetic>
				<Magnetic>
					<span
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(20)}
						className="type-fruit cursor-none text-2xl sm:text-4xl md:text-6xl font-jetBrains font-semibold"
					/>
				</Magnetic>
				<Magnetic>
					<div
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(20)}
						ref={githubRef}
						className=" items-center relative w-40 h-40 flex justify-center py-2"
					>
						<GithubLogo
							link={"https://github.com/BeroBrine"}
							className={"h-16  w-16 fill-white cursor-none "}
						/>
					</div>
				</Magnetic>
				<Cursor stickyElement={githubRef} cursorsize={cursorSize} />
			</div>
			<div className="h-12 w-full p-2 flex flex-col justify-center items-center bg-black text-white">
				<span className="font-jetBrains font-semibold text-white">
					{"Made With Love By Abhishek"}
				</span>

				<span className="font-jetBrains font-semibold text-white">
					{"Built Using React, GSAP, Framer"}
				</span>
			</div>
		</div>
	);
};

export default HomePage;
