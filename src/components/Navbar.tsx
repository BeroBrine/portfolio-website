import { useEffect, useState } from "react";
import small_dimension from "../assets/myPics/small_dimension.jpg";
import Button from "./Button";

const Navbar = ({
	showByDefault,
	homepage,
}: { showByDefault: boolean; homepage: boolean }) => {
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		if (showByDefault) return setScrolling(true);

		document.addEventListener("scroll", () => {
			console.log(document.scrollingElement?.scrollTop);
			if (document.scrollingElement?.scrollTop != 0 && !scrolling)
				return setScrolling(true);
			if (document.scrollingElement?.scrollTop == 0) {
				setScrolling(false);
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

	return (
		<div id="navbar" className="fixed top-0 w-full z-10">
			<div
				className={`${scrolling
					? "px-1 sm:px-2 m-3 my-3 z-20 justify-between overflow-hidden rounded-xl border-white border-2 border-opacity-10 backdrop-blur-lg opacity-100"
					: "-m-20 opacity-0"
					} flex flex-col md:flex-row items-center justify-between duration-1000 p-3`}
			>
				<div className="flex justify-center mb-4 md:mb-0 items-center">
					<img
						className="w-12 h-12 rounded-full"
						src={small_dimension}
						alt="pic.jpg"
					/>
					<div className="font-jetBrains font-semibold px-2 text-white text-xl">
						Abhishek Rana
					</div>
				</div>

				{homepage && (
					<div className="flex flex-col mb-2 md:mb-0 justify-center items-center">
						<span className="font-jetBrains sm:text-2xl font-bold text-white flex items-center justify-center">
							Fullstack Developer
						</span>

						<span className="font-jetBrains font-bold text-white flex items-center justify-center">
							abhishekrana8818<span className="text-yellow-300">[at]</span>
							proton
							<span className="text-yellow-300">[dot]</span>me
						</span>
					</div>
				)}

				<div className="flex relative items-center justify-center">
					<Button id={"projects"} title={"[Projects]"} className="text-base sm:text-xl px-1.5" />
					<Button id={"hobbies"} title={"[Hobbies]"} className="text-base sm:text-xl px-1.5" />
					<Button id={"linux"} title={"[Linux]"} className="text-base sm:text-xl px-1.5" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
