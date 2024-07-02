import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

import { useRef, useState } from "react";

const StringAnim = () => {
	const [path, setPath] = useState<string>("M 50 200 Q 800 200 1350 200");
	const [out, setOut] = useState<boolean>(false);
	const divRef = useRef<HTMLDivElement>(null);
	const pathRef = useRef<SVGPathElement>(null);

	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
		setPath(
			`M 50 200 Q ${Math.floor(e.clientX)} ${Math.floor(e.clientY)} 1350 200`,
		);
		setOut(false);
	};

	useGSAP(() => {
		if (out) {
			gsap.to(pathRef.current, {
				attr: {
					d: path,
				},
				duration: 0.4,
				ease: "bounce.out",
			});
		} else {
			gsap.to(pathRef.current, {
				attr: {
					d: path,
				},
				duration: 0.4,
				ease: "power3.out",
			});
		}
	}, [path, out]);

	const handleMouseLeave = () => {
		setPath("M 50 200 Q 800 200 1350 200");
		setOut(true);
	};

	return (
		<div>
			<div
				onMouseMove={handleMouse}
				onMouseLeave={handleMouseLeave}
				ref={divRef}
				id="string"
				className="py-3 bg-black w-screen  text-center"
			>
				<span className="text-white font-jetBrains text-lg font-bold ">
					Playground!
				</span>
				<svg width="1600" height="400" className="">
					<path
						ref={pathRef}
						d={"M 50 200 Q 800 200 1350 200"}
						stroke="white"
						fill="transparent"
					/>
				</svg>
			</div>
		</div>
	);
};

export default StringAnim;
