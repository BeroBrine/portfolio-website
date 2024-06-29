import { useRef, useState } from "react";
import { IPosition } from "../../lib//InterfacesAndEnum";
import imgSrc from "../../assets/altinay-dinc-LluELtL5mK4-unsplash.jpg";
import useCursorAnim from "../../hooks/CursorAnim";
import { IRefs } from "../../lib/InterfacesAndEnum";

const Cursor = ({ refElem }: { refElem?: IRefs }) => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const mousePos: IPosition = { x: 0, y: 0 };
	const [divRender, setDivRender] = useState<boolean>(false);
	const [cursorRender, setCursorRender] = useState<boolean>(false);

	console.log(refElem);
	useCursorAnim({
		cursorRef,
		textRef,
		mousePos,
		setDivRender,
		setCursorRender,
		refElem,
	});

	return (
		<div>
			{cursorRender ? (
				<div
					ref={cursorRef}
					className={`${divRender ? "" : "mix-blend-difference"} z-50 pointer-events-none  bg-yellow-200 top-0 left-0 fixed rounded-full w-3 h-3`}
				>
					{divRender ? (
						<div ref={textRef} className="fixed">
							<img src={imgSrc} alt="img" />
						</div>
					) : (
						<div className="" ref={textRef}></div>
					)}
				</div>
			) : (
				<div ref={cursorRef}></div>
			)}
		</div>
	);
};

export default Cursor;
