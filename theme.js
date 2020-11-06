import { condensed as theme } from 'mdx-deck/themes'

export default {
  ...theme,
  colors: {
    text: 'black',
    background: 'white',
    code: 'tomato'
  },
	fontSizes: [
    '2rem', '3rem', '3rem', '4rem', '6rem'
  ],
	heading: {
		textAlign: 'left'
	},
	link: {
		color: 'dodgerblue'
	},
	blockquote: {
		color: '#666',
		fontWeight: 'normal',
		paddingLeft: '0.8em',
		fontStyle: 'italic'
	},
	li: {
		margin: '16px 0',
		p: {
			margin: 0
		}
	}
}
