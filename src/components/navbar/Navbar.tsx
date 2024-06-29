import { useEffect, useRef, useState } from "react";
import small_dimension from "../../assets/small_dimension.jpg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../misc/Button";

const Navbar = ({ homepage }: { homepage: boolean }) => {
	const [scrolling, setScrolling] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		!homepage ? setScrolling(true) : setScrolling(false);

		document.addEventListener("scroll", () => {
			if (document.scrollingElement?.scrollTop != 0 && !scrolling)
				return setScrolling(true);
			if (document.scrollingElement?.scrollTop == 0) {
				return setScrolling(false);
			}
		});

		return () => {
			document.removeEventListener("scroll", () => {
				if (document.scrollingElement?.scrollTop != 0 && !scrolling)
					return setScrolling(true);
				if (document.scrollingElement?.scrollTop == 0)
					return setScrolling(false);
			});
		};
	}, []);

	useGSAP(
		() => {
			const tl1 = gsap.timeline();
			const tl2 = gsap.timeline();
			tl1.from(".tl1", {
				opacity: 0,
				scale: 1.11,
				y: -20,
				duration: 1.1,
				stagger: {
					each: 0.8,
				},
			});

			tl2.from(".tl2", {
				opacity: 0,
				scale: 1.11,
				y: -20,
				duration: 1.1,
				stagger: {
					each: 0.8,
				},
			});
		},
		{ scope: ref },
	);

	return (
		<div id="navbar" ref={ref} className="fixed top-0 w-full z-10">
			<div
				className={`${
					!scrolling
						? "px-1 sm:px-2 m-3 my-2 z-20 justify-between overflow-hidden rounded-xl border-white border-2 border-opacity-10 backdrop-blur-sm opacity-100"
						: "-m-20 opacity-0"
				} flex flex-col md:flex-row items-center justify-between duration-1000 p-3`}
			>
				<div className="flex justify-center mb-3 md:mb-0 items-center">
					<img
						className="tl1 w-12 h-12 rounded-full"
						src={small_dimension}
						alt="pic.jpg"
					/>
					<div className="tl1 font-jetBrains font-semibold px-2 text-white text-xl">
						Abhishek Rana
					</div>
				</div>

				{homepage && (
					<div className="flex flex-col mb-1 md:mb-0 justify-center items-center">
						<span className="tl1 font-jetBrains sm:text-2xl font-bold text-white flex items-center justify-center">
							Fullstack <span className="text-yellow-300 pl-2">Dev</span>eloper
						</span>

						<span className="tl2 font-jetBrains sm:text-2xl font-bold text-white flex items-center justify-center">
							abhishekrana8818<span className="text-yellow-300">[at]</span>
							proton
							<span className="text-yellow-300">[dot]</span>me
						</span>
					</div>
				)}

				<div className="flex relative items-center justify-center">
					<Button
						id={"projects"}
						title={"[Projects]"}
						className="tl2 text-base sm:text-xl px-1.5"
					/>
					<Button
						id={"linux"}
						title={"[Linux]"}
						className="tl2 text-base sm:text-xl px-1.5"
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
