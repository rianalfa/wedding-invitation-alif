/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		boxShadow: {
			'lg': '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)'
		},
		fontFamily: {
			greatVibes: ["GreatVibes", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
		},
		screens: {
			'sm': '384px',
			'md': '448px',
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				zoomIn: {
					'0%': {opacity: 0},
					'50%': {opacity: 1},
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
