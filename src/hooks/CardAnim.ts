import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useCardAnimations = (
	cardRefArr: React.MutableRefObject<HTMLDivElement[]>,
	triggerDivRef: React.RefObject<HTMLDivElement>,
) => {
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		cardRefArr.current.map((elem, i) => {
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
	});
};

export default useCardAnimations;
