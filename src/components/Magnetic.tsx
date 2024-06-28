import { type ReactNode, useRef, useState, useEffect } from "react";
import useMagneticAnimation from "../hooks/MagneticAnim";

const Magnetic = ({ children }: { children: ReactNode }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const { handleMouse, reset } = useMagneticAnimation({
		position,
		setPosition,
		ref,
	});

	useEffect(() => {
		ref.current?.addEventListener("mousemove", (e: MouseEvent) => {
			handleMouse(e);
		});

		ref.current?.addEventListener("mouseleave", () => {
			reset();
		});

		return () => {
			ref.current?.removeEventListener("mousemove", (e: MouseEvent) => {
				handleMouse(e);
			});

			ref.current?.removeEventListener("mouseleave", () => {
				reset();
			});
		};
	}, [position]);

	return (
		<div ref={ref} className="relative">
			{children}
		</div>
	);
};

export default Magnetic;
