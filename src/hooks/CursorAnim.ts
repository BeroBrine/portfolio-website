import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ICursor } from "./Interfaces";

const useCursorAnim = ({
	cursorRef,
	textRef,
	gitRef,
	mousePos,
	setDivRender,
	gitDivRender,
	refElem,
}: ICursor) => {
	const { contextSafe } = useGSAP();

	useGSAP(() => {
		const namedFn = contextSafe(() => {
			gsap.to(cursorRef.current, {
				x: mousePos.x,
				y: mousePos.y,
				duration: 1,
				ease: "back.out",
			});
		});

		const mouseEnterAnimation = contextSafe(() => {
			gsap.fromTo(
				textRef.current,
				{
					width: 100,
					height: 100,
				},
				{
					width: 200,
					height: 200,
					duration: 0.7,
				},
			);
		});

		const mouseLeaveAnimation = contextSafe(() => {
			gsap.to(cursorRef.current, {
				scale: 1,
				width: 12,
				height: 12,
			});
		});

		const updatePos = (e: MouseEvent) => {
			mousePos.x = e.clientX - 6;
			mousePos.y = e.clientY - 5;
			namedFn();
		};

		const handleMouse = () => {
			setDivRender(true);
			mouseEnterAnimation();
		};

		const handleMouseLeave = () => {
			setDivRender(false);
			mouseLeaveAnimation();
		};

		const handleGitMouseEnter = () => {
			gsap.to(gitRef.current, {
				x: 200,
				y: 200,
				width: 10,
				height: 10,
			});
		};

		window.addEventListener("mousemove", updatePos);

		refElem?.current.map((el) => {
			if (el.id === "github") {
				el.addEventListener("mouseenter", () => {
					gitDivRender(true);
					handleGitMouseEnter();
				});
				el.addEventListener("mouseleave", () => {
					gitDivRender(false);
				});
				return;
			} else {
				el.addEventListener("mouseenter", () => {
					handleMouse();
				});
				el.addEventListener("mouseleave", () => {
					handleMouseLeave();
				});
			}
		});

		return () => {
			window.removeEventListener("mousemove", updatePos);
			refElem?.current.map((el) => {
				if (el.id === "github") {
					el.removeEventListener("mouseenter", () => {
						gitDivRender(true);
					});
					el.removeEventListener("mouseleave", () => {
						gitDivRender(false);
					});
					return;
				} else {
					el.removeEventListener("mouseenter", () => {
						handleMouse();
					});
					el.removeEventListener("mouseleave", () => {
						handleMouseLeave();
					});
				}
			});
		};
	}, []);
};

export default useCursorAnim;
