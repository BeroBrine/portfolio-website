import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

const Magnetic = ({ children }: { children: ReactNode }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [postion, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: React.MouseEvent) => {
		const { clientX, clientY } = e;
		const clientRect = ref?.current?.getBoundingClientRect();

		if (
			clientRect?.top &&
			clientRect?.left &&
			clientRect?.height &&
			clientRect?.width
		) {
			const middleX = clientX - (clientRect.left + clientRect.width / 2);
			const middleY = clientY - (clientRect.top + clientRect.height / 2);
			setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
		}
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};

	return (
		<motion.div
			style={{ position: "relative" }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={postion}
		>
			{children}
		</motion.div>
	);
};

export default Magnetic;
