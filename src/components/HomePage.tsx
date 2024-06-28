import GithubLogo from "./svgs/GithubLogo";
import { useRef } from "react";
import bgVid from "../assets/myPics/bgVid.mp4";
import Navbar from "./Navbar";
import Magnetic from "./Magnetic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Cursor from "./Cursor";
import Skills from "./Skills";
import StringAnim from "./StringAnim";

const HomePage = () => {
	const textDiv = useRef<HTMLDivElement>(null);
	const parentDiv = useRef<HTMLDivElement>(null);
	const parentRef = useRef<HTMLDivElement>(null);
	const childRef = useRef<HTMLDivElement>(null);

	const refArr = useRef<Array<HTMLDivElement>>([]);
	refArr.current = [];

	useGSAP(
		() => {
			gsap.from([textDiv.current], {
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
			refArr.current.map((elem) => {
				if (elem.id === "reimagine") {
					gsap.from(elem, {
						opacity: 0,
						y: -150,
						duration: 3,
						scrollTrigger: {
							trigger: parentRef.current,
							start: "top 0%",
							scrub: 3,
							end: "top -100%",
						},
					});
				} else if (elem.id === "github") {
					gsap.from(elem, {
						opacity: 0,
						duration: 3,
						delay: 1,
						y: 40,
						scale: 1.11,
						stagger: 0.8,
					});
				} else {
					const handleMouse = () => {
						gsap.to(elem, {
							rotate: 0,
							delay: 0.3,
						});
					};

					const handleMouseLeave = () => {
						gsap.to(elem, {
							rotate: 10,

							delay: 0.3,
						});
					};
					elem.addEventListener("mouseover", handleMouse);
					elem.addEventListener("mouseleave", handleMouseLeave);
					gsap.to(elem, {
						opacity: 1,
						y: -30,
						scale: 0.8,
						rotate: 10,
						duration: 3,
						scrollTrigger: {
							trigger: parentRef.current,
							start: "top 0%",
							end: "top -100%",
							scrub: 3,
						},
					});
				}
			});
		},
		{ scope: textDiv },
	);
	return (
		<div ref={parentDiv} id="" className="container ">
			{window.outerWidth > 768 ? <Cursor refElem={refArr} /> : <div></div>}
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
					<span className="text-2xl sm:text-4xl md:text-6xl sm:cursor-none font-jetBrains font-semibold">
						Hi.&#128075;
					</span>
				</Magnetic>
				<Magnetic>
					<span className="text-2xl sm:text-4xl md:text-6xl sm:cursor-none font-jetBrains font-semibold">
						I'm Abhishek
					</span>
				</Magnetic>
				<Magnetic>
					<span className="type-fruit text-2xl sm:cursor-none sm:text-4xl md:text-6xl font-jetBrains font-semibold" />
				</Magnetic>
				<Magnetic>
					<div
						id="github"
						ref={(ref) => {
							if (ref) return refArr.current.push(ref);
						}}
						className=" items-center relative w-40 h-40 flex justify-center py-2"
					>
						<GithubLogo
							link={"https://github.com/BeroBrine"}
							className={"h-16  w-16 fill-white cursor-pointer  "}
						/>
					</div>
				</Magnetic>
			</div>

			<div
				ref={childRef}
				className="flex  flex-col bg-black overflow-hidden  sm:-mr-11 justify-center items-center font-jetBrains transform-gpu  text-[20vw]  text-white font-bold cursor-default"
			>
				<div
					id="reimagine"
					ref={(ref) => {
						if (ref) return refArr.current.push(ref);
					}}
					className="-translate-x-3  sm:transform-none"
				>
					Reimagine
				</div>
				<div
					id="rebuild"
					ref={(ref) => {
						if (ref) return refArr.current.push(ref);
					}}
					className="opacity-0"
				>
					Rebuild
				</div>
			</div>

			{
				// <div className="h-12 w-screen  p-2 flex flex-col justify-center items-center bg-black text-white">
				// 	<span className="font-jetBrains font-semibold text-white">
				// 		{"Made With Love By Abhishek"}
				// 	</span>
				//
				// 	<span className="font-jetBrains font-semibold text-white">
				// 		{"Built Using React, GSAP, Framer"}
				// 	</span>
				// </div>
			}
			<StringAnim />
			<Skills />
		</div>
	);
};

export default HomePage;
