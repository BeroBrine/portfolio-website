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
	const parentDiv = useRef<HTMLDivElement>(null);
	const reimagineRef = useRef<HTMLDivElement>(null);
	const rebuildRef = useRef<HTMLDivElement>(null);
	const parentRef = useRef<HTMLDivElement>(null);
	const childRef = useRef<HTMLDivElement>(null);

	const [cursorSize, setCursorSize] = useState<number>(10);

	useGSAP(
		() => {
			gsap.from([textDiv.current, githubRef.current], {
				opacity: 0,
				duration: 2,
				y: 40,
				scale: 1.11,
				stagger: 0.8,
			});

			gsap.fromTo(
				[childRef.current],
				{
					opacity: 0.7,
				},
				{
					opacity: 1,
				},
			);
			gsap.from(reimagineRef.current, {
				opacity: 0,
				y: -150,
				duration: 3,
				scrollTrigger: {
					trigger: parentRef.current,
					start: "top 0%",
					markers: true,
					scrub: 3,
					pin: true,
					end: "top -100%",
				},
			});

			gsap.to(rebuildRef.current, {
				opacity: 1,
				y: -30,
				scale: 0.8,
				rotate: 10,
				duration: 3,
				scrollTrigger: {
					trigger: parentRef.current,
					start: "top 0%",
					end: "top -100%",
					markers: true,
					pin: true,
					scrub: 3,
				},
			});
		},
		{ scope: textDiv },
	);

	return (
		<div ref={parentDiv} id="" className="container ">
			<Navbar homepage={true} />
			<video
				id="video"
				className="h-screen w-full absolute object-cover  overflow-x-hidden"
				autoPlay
				loop
			>
				<source src={bgVid} type="video/mp4" />
			</video>
			<div
				ref={textDiv}
				className=" opacity-1 flex-col flex justify-center items-center h-screen text-white w-screen "
			>
				<Magnetic>
					<span
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(10)}
						className="text-2xl sm:text-4xl md:text-6xl sm:cursor-none font-jetBrains font-semibold"
					>
						Hi.&#128075;
					</span>
				</Magnetic>
				<Magnetic>
					<span
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(10)}
						className="text-2xl sm:text-4xl md:text-6xl sm:cursor-none font-jetBrains font-semibold"
					>
						I'm Abhishek
					</span>
				</Magnetic>
				<Magnetic>
					<span
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(10)}
						className="type-fruit text-2xl sm:cursor-none sm:text-4xl md:text-6xl font-jetBrains font-semibold"
					/>
				</Magnetic>
				<Magnetic>
					<div
						onMouseEnter={() => setCursorSize(80)}
						onMouseLeave={() => setCursorSize(10)}
						ref={githubRef}
						className=" items-center relative w-40 h-40 flex justify-center py-2"
					>
						<GithubLogo
							link={"https://github.com/BeroBrine"}
							className={"h-16  w-16 fill-white cursor-pointer sm:cursor-none "}
						/>
					</div>
				</Magnetic>
			</div>
			<div
				ref={childRef}
				className="flex  flex-col bg-black overflow-hidden  sm:-mr-11 justify-center items-center font-jetBrains transform-gpu  text-[20vw]  text-white font-bold cursor-default"
			>
				<div ref={reimagineRef} className="-translate-x-3  sm:transform-none">
					Reimagine
				</div>
				<div ref={rebuildRef} className="opacity-0">
					Rebuild
				</div>
			</div>

			{
				<div className="h-12 w-screen  p-2 flex flex-col justify-center items-center bg-black text-white">
					<span className="font-jetBrains font-semibold text-white">
						{"Made With Love By Abhishek"}
					</span>

					<span className="font-jetBrains font-semibold text-white">
						{"Built Using React, GSAP, Framer"}
					</span>
				</div>
			}
			{window.outerWidth > 768 ? (
				<Cursor stickyElement={githubRef} cursorsize={cursorSize} />
			) : (
				<div></div>
			)}
		</div>
	);
};

export default HomePage;
