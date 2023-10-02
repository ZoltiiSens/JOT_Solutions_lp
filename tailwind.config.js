/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html'],
	theme: {
		fontFamily: {
			baseFont: ['Chakra Petch', 'sans-serif'],
		},
		extend: {
			colors: {
				primaryColor: '#42C1EE',
				secondaryColor: '#3F5477',
				backgroundColor: '#EEF1F8',
				gradColorStart: 'rgba(32, 209, 237, 0.8)',
				gradColorEnd: 'rgba(8, 129, 233, 0.8)',
			},
			width: {
				max: '1440px',
			},
			boxShadow: {
				buttonSmallShadow:
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 3px 3px 2px -1px rgb(0 0 0 / 0.1), -2px -2px 2px -1px rgb(255 255 255)',
				buttonShadow:
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 5px 5px 2px -1px rgb(0 0 0 / 0.1), -3px -3px 2px -1px rgb(255 255 255)',
				logoShadow:
					'0 1px 3px 0 rgb(0 0 0 / 0.1), 6px 6px 4px -1px rgb(0 0 0 / 0.1), -5px -5px 4px -1px rgb(255 255 255)',
			},
			spacing: {
				22: '90px',
			},
			screens: {
				des: '1480px',
				mdlg: '840px',
				xs: '544px',
			},
		},
	},
	plugins: [],
};