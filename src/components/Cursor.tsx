import { useEffect, useState, useRef, type RefObject } from "react";

import {
	animate,
	motion,
	transform,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { useIdle } from "react-use";

interface ITemplate {
	rotate: string;
	scaleX: string;
	scaleY: string;
}

const Cursor = ({
	stickyElement,
	cursorsize,
}: { stickyElement?: RefObject<HTMLDivElement>; cursorsize: number }) => {
	const [isHovered, setIsHovered] = useState(false);
	const cursorSize = cursorsize;
	const cursorRef = useRef<HTMLDivElement>(null);
	const idle = useIdle(2000);

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
	const mousePos = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
	const smoothOption = { damping: 20, stiffness: 200, mass: 0.2 };
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
		//@ts-ignore
		animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
	};

	const updatePos = (e: MouseEvent) => {
		if (stickyElement) {
			const clientRect = stickyElement.current?.getBoundingClientRect();

			if (
				clientRect?.left &&
				clientRect?.width &&
				clientRect?.top &&
				clientRect?.height
			) {
				const center = {
					x: clientRect.left + clientRect.width / 2,
					y: clientRect.top + clientRect.height / 2,
				};

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
					const newScaleX = transform(
						stretchDistance,
						[0, clientRect.width / 2],
						[1, 1.3],
					);
					const newScaleY = transform(
						stretchDistance,
						[0, clientRect.height / 2],
						[1, 0.8],
					);
					scale.x.set(newScaleX);
					scale.y.set(newScaleY);
				} else {
					mousePos.x.set(e.pageX - cursorSize / 2);
					mousePos.y.set(e.pageY - cursorSize / 2);
				}
			}
		} else {
			mousePos.x.set(e.pageX - cursorSize / 2);
			mousePos.y.set(e.pageY - cursorSize / 2);
		}
	};

	const manageMouse = () => {
		console.log("entered");
		setIsHovered(true);
	};

	const manageMouseLeave = () => {
		console.log("left");
		setIsHovered(false);
		//@ts-ignore
		animate(cursorRef?.current, { scaleX: 1, scaleY: 1 }, { duration: 0.2 });
	};

	useEffect(() => {
		window.addEventListener("mousemove", updatePos);
		if (!stickyElement) return;
		stickyElement?.current?.addEventListener("mouseover", manageMouse);

		stickyElement?.current?.addEventListener("mouseleave", manageMouseLeave);
		return () => {
			window.removeEventListener("mousemove", updatePos);
		};
	});

	const template = ({ rotate, scaleX, scaleY }: ITemplate) => {
		return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
	};

	if (renderCursor && !idle)
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
	else return <div></div>;
};

export default Cursor;
