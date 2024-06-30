import { gsap } from "gsap";
import { cardTypes } from "../lib/InterfacesAndEnum";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useCardAnimations = (
	cardRefArr: React.MutableRefObject<HTMLDivElement[]>,
	triggerDivRef: React.RefObject<HTMLDivElement>,
) => {
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		if (window.outerWidth > 768) {
			cardRefArr.current.map((elem) => {
				console.log(elem.id);
				if (elem.id === cardTypes.langCard) {
					console.log(elem.id);
					gsap.from(elem, {
						opacity: 0,
						x: -400,
						duration: 2,
						scrollTrigger: {
							trigger: triggerDivRef.current,
							end: "6%",
							scrub: 2,
							toggleActions: "play pause resume reset",
						},
					});
				} else if (elem.id === cardTypes.frameworkCard) {
					gsap.from(elem, {
						opacity: 0,
						x: +400,
						duration: 2,
						scrollTrigger: {
							trigger: triggerDivRef.current,
							end: "6%",
							scrub: 2,
							toggleActions: "play pause resume reset",
						},
					});
				} else if (elem.id === cardTypes.toolsCard) {
					gsap.from(elem, {
						opacity: 0,
						x: -400,
						duration: 5,
						scrollTrigger: {
							trigger: triggerDivRef.current,
							end: "6%",
							scrub: 2,
							toggleActions: "play pause resume reset",
						},
					});
				} else if (elem.id === cardTypes.devopsCard) {
					gsap.from(elem, {
						opacity: 0,
						y: -400,
						duration: 2,
						scrollTrigger: {
							trigger: triggerDivRef.current,
							end: "6%",
							scrub: 2,
							toggleActions: "play pause resume reset",
						},
					});
				}
			});
		}
	});
};

export default useCardAnimations;
