import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ISkillsAnim, cardTypes } from "../lib/InterfacesAndEnum";
import { ScrollTrigger } from "gsap/all";

const useSkillPageAnim = ({
	triggerDivRef,
	cardRefArr,
	iconRefArr,
}: ISkillsAnim) => {
	gsap.registerPlugin(ScrollTrigger);
	console.log(iconRefArr);
	useGSAP(() => {
		if (window.outerWidth > 768) {
			cardRefArr.current.map((elem) => {
				if (elem.id === cardTypes.langCard) {
					gsap.from(elem, {
						opacity: 0,
						x: -200,
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
						x: +200,
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
						x: -200,
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
						y: -200,
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

export default useSkillPageAnim;
