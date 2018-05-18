module.exports = {
	extends: 'airbnb',
	globals: {
		cy: true,
		describe: true,
		expect: true,
		it: true,
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