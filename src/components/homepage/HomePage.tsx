import GithubLogo from "../svgs/GithubLogo";
import { useEffect, useRef, useState } from "react";
import bgVid from "../../assets/bgVid.mp4";
import Navbar from "../navbar/Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Skills from "./Skills";
import Magnetic from "../animations/Magnetic";
import Cursor from "../animations/Cursor";
import StringAnim from "../animations/StringAnim";
import { IRefs } from "../../lib/InterfacesAndEnum";
import Quote from "./Quote";

const HomePage = () => {
	const textDiv = useRef<HTMLDivElement>(null);
	const parentDiv = useRef<HTMLDivElement>(null);

	const refObj = useRef<IRefs>(null);

	//@ts-ignore // to shut up ts to not complaint about rerender not being used
	const [rerender, setRerender] = useState<boolean>(false);
	// this re-render is neccessary because the ref does not initialize on initial render. probably something to do with useImperativeHandle hook

	useEffect(() => {
		const id = setInterval(() => {
			setRerender(true);
		}, 0.1);
		return () => {
			clearInterval(id);
		};
	}, []);

	useGSAP(
		() => {
			gsap.from([textDiv.current], {
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
		<div
			ref={parentDiv}
			id=""
			className="flex flex-col bg-black overflow-x-hidden"
		>
			<Navbar homepage={true} />
			<video
				id="video"
				className="h-screen w-full absolute object-cover  "
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
						className=" items-center relative w-40 h-40 flex justify-center py-2"
					>
						<GithubLogo
							link={"https://github.com/BeroBrine"}
							className={"h-16  w-16 fill-white cursor-pointer  "}
						/>
					</div>
				</Magnetic>
			</div>
			<Quote ref={refObj} />
			<StringAnim />
			<Skills />
			{window.outerWidth > 768 && refObj.current ? (
				<Cursor refElem={refObj.current} />
			) : (
				<div></div>
			)}
			<div className="h-12 w-screen  p-2 flex flex-col justify-center items-center bg-black text-white">
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
