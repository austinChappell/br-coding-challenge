module.exports = {
	extends: 'airbnb',
	globals: {
		navigator: true,
	},
	rules: {
		'react/jsx-filename-extension': 0,
		'react/sort-comp': 0,
	},
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	}
}