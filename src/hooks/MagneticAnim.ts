import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IMagneticAnim } from "../lib/InterfacesAndEnum";

const useMagneticAnimation = ({
	position,
	setPosition,
	ref,
}: IMagneticAnim) => {
	useGSAP(() => {
		gsap.to(ref.current, {
			x: position.x,
			y: position.y,
		});
	}, [position]);

	const handleMouse = (e: MouseEvent) => {
		if (window.outerWidth < 768) {
			return;
		}
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

	return { handleMouse, reset } as const;
};

export default useMagneticAnimation;
