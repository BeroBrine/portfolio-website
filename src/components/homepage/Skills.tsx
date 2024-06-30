import {
	RiCodeSSlashFill,
	RiTerminalBoxLine,
	RiToolsLine,
	RiReactjsFill,
	RiJavascriptLine,
	RiHtml5Fill,
} from "@remixicon/react";

import { useRef } from "react";
import Card from "./Card";
import useCardAnimations from "../../hooks/CardAnim";
import { cardTypes } from "../../lib/InterfacesAndEnum";

const Skills = () => {
	const langArr = ["Typescript", "Javascript", "Java", "Bash"];
	const frameworkArr1 = ["React", "Recoil", "Node.js", "Express.js", "GSAP"];
	const frameworkArr2 = ["MongoDB", "PostgreSQL", "Hono.js", "WebSockets"];
	const devOpsArr = ["AWS", "Docker", "Cloudflare CDN"];
	const toolsArr = ["Vim", "Turborepo", "Linux", "Git"];

	const frameworkIcon = [RiReactjsFill, RiJavascriptLine, RiHtml5Fill];

	const cardRefArr = useRef<HTMLDivElement[]>([]);
	const triggerDivRef = useRef<HTMLDivElement>(null);

	useCardAnimations(cardRefArr, triggerDivRef);
	cardRefArr.current.map((elem) => console.log(elem.id));

	return (
		<div>
			<div
				ref={triggerDivRef}
				className="h-fit md:h-screen py-2 w-screen items-center justify-items-center bg-black "
			>
				<div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 items-center gap-6 flex-row justify-between p-10">
					<Card
						id={cardTypes.langCard}
						ref={(ref) => {
							if (ref) cardRefArr.current.push(ref);
						}}
						title="Languages"
						listItems={langArr}
						Icon={RiCodeSSlashFill}
					/>
					<Card
						id={cardTypes.frameworkCard}
						ref={(ref) => {
							if (ref) cardRefArr.current.push(ref);
						}}
						title="Framework"
						listItems={frameworkArr1}
						secondListItems={frameworkArr2}
						HeadingIcons={frameworkIcon}
						dark
					/>
					<Card
						id={cardTypes.devopsCard}
						ref={(ref) => {
							if (ref) cardRefArr.current.push(ref);
						}}
						title="DevOps"
						listItems={devOpsArr}
						Icon={RiTerminalBoxLine}
						dark
					/>
					<Card
						id={cardTypes.toolsCard}
						ref={(ref) => {
							if (ref) cardRefArr.current.push(ref);
						}}
						title="Tools"
						listItems={toolsArr}
						Icon={RiToolsLine}
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
