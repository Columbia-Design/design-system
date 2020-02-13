//generate a compiled css and js of all included/required libraries/styles needed to run cu components

const jsExports = [
	'jquery/dist/jquery.min.js',
	'popper.js/dist/popper.min.js',
	'bootstrap/dist/js/bootstrap.min.js',
	'./jquery.js',
	'./assets/lib/breadcrumb.js',
];

const cssExports = [
	'./src/styles/sass/_cu-colors.scss',
	'./src/styles/sass/_cu-slider.scss',
	'./src/styles/sass/_cu-accordion.scss',
	'./src/styles/sass/_cu-alerts.scss',
	'./src/styles/sass/_cu-pullquote.scss',
	'./src/styles/sass/_cu-buttons.scss',
	'./src/styles/sass/_cu-dropdown.scss',
	'./src/styles/sass/_cu-heroes.scss',
	'./src/styles/sass/_cu-progressbar.scss',
	'./src/styles/sass/_cu-breadcrumb.scss',
	'@fortawesome/fontawesome-free/css/fontawesome.css',
	'@fortawesome/fontawesome-free/css/solid.css',
	'bootstrap/scss/bootstrap.scss'
];



