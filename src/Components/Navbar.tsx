import { useEffect, useState } from "react";
import small_dimension from "../assets/myPics/small_dimension.jpg";
import Button from "./Button";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);
	const test = () => {
		const node = document.getElementById("navbar");
		const parentnode = node?.parentElement;

		console.log(parentnode);
	};
	test();
	useEffect(() => {
		document.addEventListener("scroll", () => {
			if (document.scrollingElement?.scrollTop != 0 && !scrolling)
				return setScrolling(true);
			if (document.scrollingElement?.scrollTop == 0) return setScrolling(false);
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
		<div id="navbar" className="fixed top-0 w-full">
			<div
				className={`${
					scrolling
						? "px-1 m-5   my-3 z-20 flex justify-between overflow-hidden   rounded-xl border-white border-2 border-opacity-10 backdrop-blur-lg opacity-100"
						: "-m-20 opacity-0"
				} flex justify-between  duration-1000`}
			>
				<div className=" flex items-center justify-center">
					<img
						className="w-12 h-12 rounded-full"
						src={small_dimension}
						alt="pic.jpg"
					/>
					<div className="font-jetBrains font-semibold px-2 text-white text-xl">
						Abhishek Rana
					</div>
				</div>

				<div className="flex justify-center py-4 relative items-center">
					<Button id={"projects"} title={"Projects"} />
					<Button id={"hobbies"} title={"Hobbies"} />
					<Button id={"linux"} title={"Linux Nerding :)"} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
