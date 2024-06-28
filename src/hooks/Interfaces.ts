export interface IRoute {
	key: number;
	path: string;
	element: React.FC;
}

export interface IPosition {
	x: number;
	y: number;
}

export interface IMagneticAnim {
	position: IPosition;
	setPosition: React.Dispatch<React.SetStateAction<IPosition>>;
	ref: React.RefObject<HTMLDivElement>;
}

export interface ICursor {
	cursorRef: React.RefObject<HTMLDivElement>;
	textRef: React.RefObject<HTMLDivElement>;
	gitRef: React.RefObject<HTMLDivElement>;
	mousePos: IPosition;
	setDivRender: React.Dispatch<React.SetStateAction<boolean>>;
	setCursorRender: React.Dispatch<React.SetStateAction<boolean>>;
	refElem?: React.MutableRefObject<HTMLDivElement[]>;
}
