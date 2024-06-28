import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

import { useRef, useState } from "react";
import Cursor from "./Cursor";

const Playground = () => {
	const [path, setPath] = useState<string>("");
	const [out, setOut] = useState<boolean>(false);
	const divRef = useRef<HTMLDivElement>(null);
	const pathRef = useRef<SVGPathElement>(null);

	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
		setPath(`M 100 200 Q ${e.clientX} ${e.clientY} 1500 200`);
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
		setPath("M 100 200 Q 800 200 1500 200");
		setOut(true);
	};

	return (
		<div>
			<Cursor refElem={divRef} />
			<div
				onMouseMove={handleMouse}
				onMouseLeave={handleMouseLeave}
				ref={divRef}
				id="string"
				className="bg-black"
			>
				<svg width="1600" height="400" className="">
					<path
						ref={pathRef}
						d={"M 100 200 Q 800 200 1500 200"}
						stroke="white"
						fill="transparent"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Playground;
