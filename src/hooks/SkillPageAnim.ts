import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ISkillsAnim, cardTypes } from "../lib/InterfacesAndEnum";
import { ScrollTrigger } from "gsap/all";

const useSkillPageAnim = ({ triggerDivRef, cardRefArr }: ISkillsAnim) => {
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		cardRefArr.current.map((elem) => {
			if (elem.id === cardTypes.langCard) {
				console.log("animating");
				gsap.from(elem, {
					opacity: 0,
					y: -100,
					duration: 2,
					scrollTrigger: {
						trigger: triggerDivRef.current,
						end: "top",

						toggleActions: "play pause resume reset",
					},
				});
			} else if (elem.id === cardTypes.frameworkCard) {
				gsap.from(elem, {
					opacity: 0,
					y: +100,
					duration: 2,
					scrollTrigger: {
						trigger: triggerDivRef.current,
						end: "top",
						toggleActions: "play pause resume reset",
					},
				});
			}
		});
	});
};

export default useSkillPageAnim;
