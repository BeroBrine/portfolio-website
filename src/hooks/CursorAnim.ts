import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ICursor } from "../lib/InterfacesAndEnum";

const useCursorAnim = ({
	cursorRef,
	textRef,
	mousePos,
	setDivRender,
	setCursorRender,
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
			setCursorRender(true);
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

		window.addEventListener("mousemove", updatePos);

		refElem?.rebuildRef.current?.addEventListener("mouseenter", () => {
			console.log("mouseEntry");
			handleMouse();
		});
		refElem?.rebuildRef.current?.addEventListener("mouseleave", () => {
			console.log("mouseEntry");
			handleMouseLeave();
		});

		refElem?.reimageineRef.current?.addEventListener("mouseenter", () => {
			handleMouse();
		});
		refElem?.reimageineRef.current?.addEventListener("mouseleave", () => {
			handleMouseLeave();
		});

		return () => {
			window.removeEventListener("mousemove", updatePos);
			refElem?.rebuildRef.current?.removeEventListener("mouseenter", () => {
				handleMouse();
			});
			refElem?.rebuildRef.current?.removeEventListener("mouseleave", () => {
				handleMouseLeave();
			});

			refElem?.reimageineRef.current?.removeEventListener("mouseenter", () => {
				handleMouse();
			});
			refElem?.reimageineRef.current?.removeEventListener("mouseleave", () => {
				handleMouseLeave();
			});
		};
	}, []);
};

export default useCursorAnim;
