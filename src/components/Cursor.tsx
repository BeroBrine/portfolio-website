import { useEffect, useState, useRef, LegacyRef, ForwardedRef } from "react";
import {
	animate,
	motion,
	transform,
	useMotionValue,
	useSpring,
} from "framer-motion";

const Cursor = ({
	stickyElement,
}: { stickyElement: ForwardedRef<HTMLDivElement> }) => {
	const [isHovered, setIsHovered] = useState(false);
	const cursorSize = isHovered ? 80 : 20;
	const cursorRef = useRef();

	const mousePos = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
	const smoothOption = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mousePos.x, smoothOption),
		y: useSpring(mousePos.y, smoothOption),
	};
	const scale = {
		x: useMotionValue(1),
		y: useMotionValue(1),
	};
	const rotate = ({ x, y }: { x: number; y: number }) => {
		const angle = Math.atan2(y, x);
		animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
	};

	const updatePos = (e: MouseEvent) => {
		if (stickyElement) {
			const { left, top, width, height } =
				stickyElement!.current.getBoundingClientRect();
			const center = { x: left + width / 2, y: top + height / 2 };
			const distance = { x: e.clientX - center.x, y: e.clientY - center.y };
			rotate(distance);
			if (isHovered) {
				const xPos = center.x - cursorSize / 2;
				const yPos = center.y - cursorSize / 2;
				mousePos.x.set(xPos + distance.x * 0.1);
				mousePos.y.set(yPos + distance.y + 0.1);

				const stretchDistance = Math.max(
					Math.abs(distance.x),
					Math.abs(distance.y),
				);
				const newScaleX = transform(stretchDistance, [0, width / 2], [1, 1.3]);
				const newScaleY = transform(stretchDistance, [0, height / 2], [1, 0.8]);
				scale.x.set(newScaleX);
				scale.y.set(newScaleY);
			} else {
				mousePos.x.set(e.pageX - cursorSize / 2);
				mousePos.y.set(e.pageY - cursorSize / 2);
			}
		} else {
			mousePos.x.set(e.pageX - cursorSize / 2);
			mousePos.y.set(e.pageY - cursorSize / 2);
		}
	};

	const manageMouse = (e: MouseEvent) => {
		console.log("entered");
		setIsHovered(true);
	};

	const manageMouseLeave = (e: MouseEvent) => {
		console.log("left");
		setIsHovered(false);
		animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0.2 });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updatePos);
		if (!stickyElement) return;
		//@ts-ignore
		stickyElement!.current.addEventListener("mouseover", manageMouse);

		//@ts-ignore
		stickyElement!.current.addEventListener("mouseleave", manageMouseLeave);
		return () => {
			window.removeEventListener("mousemove", updatePos);

			//@ts-ignore
			stickyElement!.current.removeEventListener("mouseover", manageMouse);

			//@ts-ignore
			stickyElement!.current.removeEventListener(
				"mouseleave",
				manageMouseLeave,
			);
		};
	});

	const template = ({ rotate, scaleX, scaleY }) => {
		return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
	};
	return (
		<motion.div
			transformTemplate={template}
			animate={{ width: cursorSize, height: cursorSize }}
			ref={cursorRef}
			style={{
				left: smoothMouse.x,
				top: smoothMouse.y,
				scaleX: scale.x,
				scaleY: scale.y,
			}}
			className={`pointer-events-none bg-yellow-200  absolute  rounded-full top-0 left-0 z-50 mix-blend-difference`}
		></motion.div>
	);
};

export default Cursor;
