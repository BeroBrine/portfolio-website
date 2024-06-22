import GithubLogo from "./svgs/GithubLogo";
import { useEffect, useRef, useState } from "react";
import bgVid from "../assets/myPics/bgVid.mp4";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import Magnetic from "./Magnetic";
import { useIdle } from "react-use";

const Video = () => {
	const ref = useRef<HTMLDivElement>(null);
	const idle = useIdle(2000);
	const [cursorSize, setCursorSize] = useState<number>(20);
	const [renderCursor, setRenderCursor] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("mousemove", () => {
			setRenderCursor(true);
		});

		return () => {
			window.removeEventListener("mousemove", () => {
				setRenderCursor(false);
			});
		};
	}, []);

	return (
		<div id="container" className="">
			{renderCursor && !idle ? (
				<Cursor stickyElement={ref} cursorsize={cursorSize} />
			) : null}
			<Navbar homepage={true} showByDefault={true} />
			<video
				id="video"
				className="h-screen w-full absolute object-cover -z-10 "
				autoPlay
				loop
			>
				<source src={bgVid} type="video/mp4" />
			</video>
			<div className=" flex-col flex justify-center items-center h-screen text-white  mx-auto">
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
						ref={ref}
						className=" items-center relative w-40 h-40 flex justify-center py-2"
					>
						<GithubLogo className={"h-16  w-16 fill-white cursor-none "} />
					</div>
				</Magnetic>
			</div>
		</div>
	);
};

export default Video;
