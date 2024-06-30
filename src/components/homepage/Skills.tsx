import {
	RiArrowRightSLine,
	RiCodeSSlashFill,
	RiTerminalBoxLine,
	RiToolsLine,
	RiReactjsFill,
	RiJavascriptLine,
	RiHtml5Fill,
} from "@remixicon/react";
import type { RemixiconComponentType } from '@remixicon/react'
import { useRef } from "react";
import useSkillPageAnim from "../../hooks/SkillPageAnim";
import { cardTypes } from "../../lib/InterfacesAndEnum";
import { cn } from "../../lib/utils";

const Skills = () => {
	const langArr = ["Typescript", "Javascript", "Java", "Bash"];
	const frameworkArr1 = ["React", "Recoil", "Node.js", "Express.js", "GSAP"];
	const frameworkArr2 = ["MongoDB", "PostgreSQL", "Hono.js", "WebSockets"];
	const devOpsArr = ["AWS", "Docker", "Cloudflare CDN"];
	const toolsArr = ["Vim", "Turborepo", "Linux", "Git"];

	const frameworkIcon = [
		RiReactjsFill,
		RiJavascriptLine,
		RiHtml5Fill,
	];

	const cardRefArr = useRef<HTMLDivElement[]>([]);
	const iconRefArr = useRef<SVGSVGElement[]>([]);
	const triggerDivRef = useRef<HTMLDivElement>(null);

	//useSkillPageAnim({ triggerDivRef, cardRefArr });
=======
	console.log(iconRefArr);
	useSkillPageAnim({ triggerDivRef, cardRefArr, iconRefArr });

	return (
		<div>
			<div
				ref={triggerDivRef}
				className="h-fit md:h-screen py-2 w-screen items-center justify-items-center bg-black "
			>

				<div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 items-center gap-6 flex-row justify-between p-10">
					<Card title="Languages" listItems={langArr} Icon={RiCodeSSlashFill} />
					<Card title="Framework" listItems={frameworkArr1} secondListItems={frameworkArr2} HeadingIcons={frameworkIcon} dark />
					<Card title="DevOps" listItems={devOpsArr} Icon={RiTerminalBoxLine} dark />
					<Card title="Tools" listItems={toolsArr} Icon={RiToolsLine} />
=======
				<div className="w-full h-1/2 flex flex-row justify-between px-56">
					<div
						id={cardTypes.langCard}
						ref={(ref) => {
							if (ref) cardRefArr.current.push(ref);
						}}
						className="p-2.5  rounded-lg w-[30%] h-fit bg-white flex flex-row "
					>
						<div className="flex flex-row  w-full border-black  p-2 rounded-lg border-2 overflow-hidden">
							<span className="font-jetBrains text-xl flex flex-col  font-bold w-1/2">
								Languages
								{langArr.map((elem) => {
									return (
										<span className="font-jetBrains px-1 py-2 flex flex-row text-xl font-semibold ">
											<RiArrowRightSLine color="orange" />
											{elem}
										</span>
									);
								})}
							</span>
							<div className="flex w-1/2 justify-center items-center">
								<RiCodeSSlashFill size={64} />
							</div>
						</div>
					</div>
					<div
						id={cardTypes.frameworkCard}
						ref={(ref) => {
							if (ref) cardRefArr.current.push(ref);
						}}
						className="p-2  rounded-lg w-[30%] h-fit bg-black border-white border-2 flex flex-row"
					>
						<div className="flex flex-col w-full h-fit border-white  p-2 rounded-lg border-2">
							<div className="flex flex-row justify-between w-full h-fit text-white ">
								<span className="font-jetBrains pb-1 text-xl fl font-bold">
									Framework
								</span>
								<div className="text-white flex flex-row">
									{frameworkIcon.map((Elem) => {
										return (
											<Elem
												ref={(ref) => {
													if (ref) iconRefArr.current.push(ref);
												}}
												size={28}
												className=""
											/>
										);
									})}
								</div>
							</div>
							<div className="w-full flex flex-row ">
								<span className="font-jetBrains text-white text-xl flex flex-col  font-bold w-1/2">
									{frameworkArr1.map((elem) => {
										return (
											<span className="font-jetBrains  py-1 flex flex-row text-xl font-semibold ">
												<RiArrowRightSLine color="orange" />
												{elem}
											</span>
										);
									})}
								</span>
								<div className="flex flex-col text-white w-1/2  justify-left">
									{frameworkArr2.map((elem) => {
										return (
											<span className="font-jetBrains  py-1 flex flex-row text-xl font-semibold ">
												<RiArrowRightSLine color="orange" />
												{elem}
											</span>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					id={cardTypes.devopsCard}
					ref={(ref) => {
						if (ref) cardRefArr.current.push(ref);
					}}
					className="w-full h-1/2 flex flex-row justify-between px-56"
				>
					<div className="p-2  rounded-lg w-[30%] h-fit bg-black border-white border-2 flex flex-row ">
						<div className="flex flex-row  w-full border-white  text-white p-2 rounded-lg border-2 overflow-hidden">
							<span className="font-jetBrains text-xl flex flex-col  font-bold w-1/2">
								DevOps
								{devOpsArr.map((elem) => {
									return (
										<span className="font-jetBrains  py-1 flex flex-row text-xl font-semibold ">
											<RiArrowRightSLine color="orange" />
											{elem}
										</span>
									);
								})}
							</span>
							<div className="flex w-1/2 justify-center items-center">
								<RiTerminalBoxLine size={64} />
							</div>
						</div>
					</div>
					<div
						id={cardTypes.toolsCard}
						ref={(ref) => {
							if (ref) cardRefArr.current.push(ref);
						}}
						className="p-2  rounded-lg w-[30%] h-fit bg-white flex flex-row"
					>
						<div className="flex flex-row w-full h-fit border-black text-black  p-2 rounded-lg border-2">
							<span className="font-jetBrains text-xl flex flex-col  font-bold w-1/2">
								Tools
								{toolsArr.map((elem) => {
									return (
										<span className="font-jetBrains  py-1 flex flex-row text-xl font-semibold ">
											<RiArrowRightSLine color="orange" />
											{elem}
										</span>
									);
								})}
							</span>

							<div className="flex w-1/2 justify-center items-center">
								<RiToolsLine size={64} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Card = ({ dark, title, listItems, Icon, HeadingIcons, secondListItems }: {
	dark?: boolean,
	title: string,
	listItems: string[],
	Icon?: RemixiconComponentType,
	HeadingIcons?: RemixiconComponentType[],
	secondListItems?: string[]
}) => {
	return <div className={cn(
		"rounded-lg w-full p-2 h-full bg-white border-2 border-black font-jetBrains",
		dark && "bg-black border-white"
	)}>
		<div className={cn(
			"rounded-lg p-4 w-full h-full bg-white border-2 border-black",
			dark && "bg-black border-white text-white"
		)}>
			<h4 className="font-bold text-2xl lg:text-4xl mb-4 flex items-center justify-between">
				{title}

				{HeadingIcons && <div className="flex">{HeadingIcons.map(Icn => <Icn size={32} />)}</div>}
			</h4>
			<div className="flex h-[calc(100%-40px)]">
				<ul className="w-1/2 h-full">
					{listItems.map(t => (
						<li id={t} className="flex gap-2 md:text-xl lg:text-3xl">
							<RiArrowRightSLine color="orange" />
							{t}
						</li>
					))}
				</ul>
				<div className="w-1/2 h-[calc(100%-40px)] relative">
					{Icon ? (
						<Icon className="absolute size-14 lg:size-24 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2" />
					) : secondListItems && (
						<ul>
							{secondListItems.map(t => (
								<li id={t} className="flex gap-2 md:text-xl lg:text-3xl">
									<RiArrowRightSLine color="orange" />
									{t}
								</li>
							))}
						</ul>)}
				</div>
			</div>
		</div>
	</div >
}

export default Skills;
