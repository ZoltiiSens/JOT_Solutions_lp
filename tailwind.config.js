// npx tailwindcss -i .\css\dev_style.css -o .\css\style.css
// @type {import('tailwindcss').Config}
// module.exports = {
// 	content: ['./*.html'],
// 	darkMode: 'class',
// 	theme: {
// 		fontFamily: {
// 			baseFont: ['Chakra Petch', 'sans-serif'],
// 		},
// 		extend: {
// 			colors: {
// 				primaryColor: '#42C1EE',
// 				darkPrimaryColor: '#D37101',
// 				darkPrimaryColor2: '#FF8A00',
// 				secondaryColor: '#3F5477',
// 				darkSecondaryColor: '#F9F9F9',
// 				backgroundColor: '#EEF1F8',
// 				darkBackgroundColor: '#1E1E1E',
// 				darkBackgroundColor2: '#2C2F33',
// 				gradColorStart: 'rgba(32, 209, 237, 0.8)',
// 				gradColorEnd: 'rgba(8, 129, 233, 0.8)',
// 			},
// 			width: {
// 				max: '1440px',
// 			},
// 			boxShadow: {
// 				buttonSmallShadow:
// 					'0 1px 3px 0 rgb(0 0 0 / 0.1), 3px 3px 2px -1px rgb(0 0 0 / 0.1), -2px -2px 2px -1px rgb(255 255 255)',
// 				buttonShadow:
// 					'0 1px 3px 0 rgb(0 0 0 / 0.1), 5px 5px 2px -1px rgb(0 0 0 / 0.1), -3px -3px 2px -1px rgb(255 255 255)',
// 				logoShadow:
// 					'0 1px 3px 0 rgb(0 0 0 / 0.1), 6px 6px 4px -1px rgb(0 0 0 / 0.1), -5px -5px 4px -1px rgb(255 255 255)',
// 				darkShadow:
// 					'5px 5px 10px rgba(13, 13, 15, 0.75), -2px -2px 4px #5E6569, -3px -3px 6px #262E32',
// 				newButtonShadow:
// 					'4px 4px 8px 0px #C3C3C3, -4px -4px 8px 0px #FFFFFF',
					
// 			},
// 			spacing: {
// 				22: '90px',
// 			},
// 			screens: {
// 				des: '1480px',
// 				mdlg: '840px',
// 				xs: '544px',
// 			},
// 		},
// 	},
// 	plugins: [],
// };
tailwind.config = {
	content: ['./*.html'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			baseFont: ['Chakra Petch', 'sans-serif'],
			latoFont: ['Lato', 'sans-serif'],
		},
		extend: {
			colors: {
				primaryColor: '#42C1EE',
				darkPrimaryColor: '#D37101',
				darkPrimaryColorLighter: '#D37101',
				secondaryColor: '#3F5477',
				darkSecondaryColor: '#F9F9F9',
				backgroundColor: '#EEF1F8',
				darkBackgroundColor: '#1E1E1E',
				darkBackgroundColor2: '#2C2F33',
				darkBackgroundColor2Opacity: '#2C2F33FA',
				gradColorStart: 'rgba(32, 209, 237, 0.8)',
				gradColorEnd: 'rgba(8, 129, 233, 0.8)',
				darkGradColorStart: 'rgba(211, 113, 1, 1)',
				darkGradColorEnd: 'rgba(191, 93, 1, 1)',
				darkGradColorEnd: 'rgba(191, 93, 1, 1)',
				goldenColor: '#D09F20',
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
				darkShadow:
					'5px 5px 10px rgba(13, 13, 15, 0.75), -2px -2px 4px #5E6569, -3px -3px 6px #262E32',
				darkBiggerShadow:
					'7px 7px 10px rgba(13, 13, 15, 0.75), -4px -4px 4px #5E6569, -5px -5px 6px #262E32',
				darkPrimaryShadow:
					'-3px -3px 3px rgba(231, 133, 21, 1), 3px 3px 6px #000000',
				newButtonShadow:
					'4px 4px 8px 0px #C3C3C3, -4px -4px 8px 0px #FFFFFF',
				newButtonShadowSmaller:
					'3px 3px 6px 0px #C3C3C3, -3px -3px 6px 0px #FFFFFF',
				newButtonShadowSmallest:
					'2px 2px 4px 0px #D0EBFA, -2px -2px 4px 0px #FFFFFF, 1px 1px 2px 0px #C2CFD6',
				newInnerShadow:
					'4px 4px 8px 0px #C3C3C3 inset, -4px -4px 8px 0px #FFFFFF inset',
			},
			spacing: {
				22: '90px',
			},
			screens: {
				des: '1480px',
				mdlg: '840px',
				xs: '544px',
				xxs: '400px'
			},
		},
	},
	plugins: [],
};