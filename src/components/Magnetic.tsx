import { motion } from "framer-motion";
import {
	LegacyRef,
	MouseEventHandler,
	ReactNode,
	useRef,
	useState,
} from "react";

const Magnetic = ({ children }: { children: ReactNode }) => {
	const ref = useRef(null);
	const [postion, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		const { height, width, left, top } = ref.current?.getBoundingClientRect();
		const middleX = clientX - (left + width / 2);
		const middleY = clientY - (top + height / 2);
		setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
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
