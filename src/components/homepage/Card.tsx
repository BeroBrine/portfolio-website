import { RiArrowRightSLine } from "@remixicon/react";
import { cn } from "../../lib/utils";
import { forwardRef } from "react";
import { ICard } from "../../lib/InterfacesAndEnum";

const Card = forwardRef<HTMLDivElement, ICard>(
	(
		{ dark, title, listItems, Icon, HeadingIcons, secondListItems, id }: ICard,
		ref,
	) => {
		return (
			<div
				ref={ref}
				id={id}
				className={cn(
					"rounded-lg w-full p-2 h-full bg-white border-2 border-black font-jetBrains",
					dark && "bg-black border-white",
				)}
			>
				<div
					className={cn(
						"rounded-lg p-4 w-full h-full bg-white border-2 border-black",
						dark && "bg-black border-white text-white",
					)}
				>
					<h4 className="font-bold text-2xl lg:text-4xl mb-4 flex items-center justify-between">
						{title}

						{HeadingIcons && (
							<div className="flex">
								{HeadingIcons.map((Icn) => (
									<Icn size={32} />
								))}
							</div>
						)}
					</h4>
					<div className="flex h-[calc(100%-40px)]">
						<ul className="w-1/2 h-full">
							{listItems.map((t) => (
								<li id={t} className="flex gap-2 md:text-xl lg:text-3xl">
									<RiArrowRightSLine color="orange" />
									{t}
								</li>
							))}
						</ul>
						<div className="w-1/2 h-[calc(100%-40px)] relative">
							{Icon ? (
								<Icon className="absolute size-14 lg:size-24 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2" />
							) : (
								secondListItems && (
									<ul>
										{secondListItems.map((t) => (
											<li id={t} className="flex gap-2 md:text-xl lg:text-3xl">
												<RiArrowRightSLine color="orange" />
												{t}
											</li>
										))}
									</ul>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		);
	},
);

export default Card;
