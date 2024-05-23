/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			average: ["Average", "sans-serif"],
			cormorant: ["Cormorant", "sans-serif"],
			cormorantUnicase: ["CormorantUnicase", "sans-serif"],
			greatVibes: ["GreatVibes", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
			roboto: ["Roboto", "sans-serif"],
		},
		screens: {
			'md': '448px',
			'lg': '756px',
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				fadeIn: {
					'0%': {opacity: 0},
					'25%': {opacity: 1},
					'75%': {opacity: 1},
					'100%': {opacity: 0},
				},
			},
			screens: {
				'xs': '320px',
			}
		},
	},
	plugins: [],
};
