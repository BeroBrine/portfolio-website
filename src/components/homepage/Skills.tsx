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
import { ICardRefs } from "../../lib/InterfacesAndEnum";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Skills = () => {
	const langArr = ["Typescript", "Javascript", "Java", "Bash"];
	const frameworkArr1 = ["React", "Recoil", "Node.js", "Express.js", "GSAP"];
	const frameworkArr2 = ["MongoDB", "PostgreSQL", "Hono.js", "WebSockets"];
	const devOpsArr = ["AWS", "Docker", "Cloudflare CDN"];
	const toolsArr = ["Vim", "Turborepo", "Linux", "Git"];
	const frameworkIcon = [RiReactjsFill, RiJavascriptLine, RiHtml5Fill];
	const cardRefArr = useRef<HTMLDivElement[]>([]);
	const iconRefArr = useRef<HTMLDivElement[]>([]);

	const triggerDivRef = useRef<HTMLDivElement>(null);

	const refObj = useRef<ICardRefs>(null);

	useGSAP(() => {
		console.log(refObj.current?.iconRefArr);
		refObj.current?.cardRef?.current.map((elem, i) => {
			if (window.outerWidth > 768) {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: triggerDivRef.current,
						end: "6%",
						scrub: 2,
					},
				});

				i % 2
					? tl.from(elem, {
							opacity: 0,
							x: +400,
						})
					: tl.from(elem, {
							opacity: 0,
							x: -400,
						});
			} else {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: triggerDivRef.current,
						end: "6%",
						scrub: true,
					},
				});

				i % 2
					? tl.from(elem, {
							opacity: 0,
							x: +400,
						})
					: tl.from(elem, {
							opacity: 0,
							x: -400,
						});
			}
		});

		// refObj.current?.iconRefArr?.current.map((elem, i) => {
		//     if(window.outerWidth )
		//   });
	}, []);
	return (
		<div>
			<div
				ref={triggerDivRef}
				className="h-fit md:h-screen py-2 w-screen items-center justify-items-center bg-black "
			>
				<div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 items-center gap-6 flex-row justify-between p-10">
					<Card
						cardRef={cardRefArr}
						iconRef={iconRefArr}
						ref={refObj}
						title="Languages"
						listItems={langArr}
						Icon={RiCodeSSlashFill}
					/>
					<Card
						cardRef={cardRefArr}
						ref={refObj}
						iconRef={iconRefArr}
						title="Framework"
						listItems={frameworkArr1}
						secondListItems={frameworkArr2}
						HeadingIcons={frameworkIcon}
						frameworkCard
						dark
					/>
					<Card
						ref={refObj}
						cardRef={cardRefArr}
						iconRef={iconRefArr}
						title="DevOps"
						listItems={devOpsArr}
						Icon={RiTerminalBoxLine}
						dark
					/>
					<Card
						cardRef={cardRefArr}
						ref={refObj}
						title="Tools"
						iconRef={iconRefArr}
						listItems={toolsArr}
						Icon={RiToolsLine}
					/>
				</div>
			</div>
		</div>
	);
};

export default Skills;
