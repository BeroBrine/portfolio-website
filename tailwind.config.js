/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				jetBrains: ["JetBrains Mono", "monospace"],
			},
			colors: {
				secCol: "#31363F",
			},
		},
	},
	plugins: [
		require("tailwind-typewriter")({
			wordsets: {
				fruit: {
					words: ["Web and Linux enthusiast", "I use Arch BTW :)"],
					pauseBetween: 2,
					repeat: -1,
					writeSpeed: 0.2,
					eraseSpeed: 0.1,
				},
			},
		}),
	],
};
