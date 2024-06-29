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
	mousePos: IPosition;
	setDivRender: React.Dispatch<React.SetStateAction<boolean>>;
	setCursorRender: React.Dispatch<React.SetStateAction<boolean>>;
	refElem?: IRefs;
}

export interface ISkillsAnim {
	triggerDivRef: React.RefObject<HTMLDivElement>;
	cardRefArr: React.MutableRefObject<HTMLDivElement[]>;
}

export enum cardTypes {
	langCard = "langCard",
	frameworkCard = "frameworkCard",
	devopsCard = "devopsCard",
	toolsCard = "toolsCard",
}

export interface IRefs {
	reimageineRef: React.RefObject<HTMLDivElement>;
	rebuildRef: React.RefObject<HTMLDivElement>;
}

export type TRefs = React.ForwardedRef<IRefs>;
