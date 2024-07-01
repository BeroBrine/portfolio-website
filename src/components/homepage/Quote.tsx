import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { ISkillsRefs } from "../../lib/InterfacesAndEnum";

const Quote = forwardRef<ISkillsRefs>(({}, ref) => {
	const parentRef = useRef<HTMLDivElement>(null);
	const childRef = useRef<HTMLDivElement>(null);
	const reimagineRef = useRef<HTMLDivElement>(null);
	const rebuildRef = useRef<HTMLDivElement>(null);

	useImperativeHandle(
		ref,
		() => ({
			reimageineRef: reimagineRef,
			rebuildRef: rebuildRef,
		}),
		[],
	);

	useGSAP(() => {
		gsap.from(reimagineRef.current, {
			opacity: 0,
			y: -150,
			duration: 3,
			scrollTrigger: {
				trigger: parentRef.current,
				start: "top 0%",
				scrub: 3,
				end: "top -100%",
			},
		});
		const handleMouse = () => {
			gsap.to(rebuildRef.current, {
				rotate: 0,
				delay: 0.3,
			});
		};

		const handleMouseLeave = () => {
			gsap.to(rebuildRef.current, {
				rotate: 10,

				delay: 0.3,
			});
		};
		rebuildRef.current?.addEventListener("mouseover", handleMouse);
		rebuildRef.current?.addEventListener("mouseleave", handleMouseLeave);
		gsap.to(rebuildRef.current, {
			opacity: 1,
			y: -30,
			scale: 0.8,
			rotate: 10,
			duration: 3,
			scrollTrigger: {
				trigger: parentRef.current,
				start: "top 0%",
				end: "top -100%",
				scrub: 3,
			},
		});
	});

	return (
		<div
			ref={childRef}
			className="flex overflow-hidden h-screen w-screen flex-col bg-black   sm:-mr-11 justify-center items-center font-jetBrains  text-[20vw]  text-white font-bold cursor-default "
		>
			<div ref={reimagineRef} id="reimagine" className="-translate-x-3  ">
				Reimagine
			</div>
			<div ref={rebuildRef} id="rebuild" className="opacity-0">
				Rebuild
			</div>
		</div>
	);
});

export default Quote;
