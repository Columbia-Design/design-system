//generate a compiled css and js of all included/required libraries/styles needed to run cu components
const fs = require("fs");
const sass = require('node-sass');

const jsExports = [
	'jquery/dist/jquery.min.js',
	'popper.js/dist/popper.min.js',
	'bootstrap/dist/js/bootstrap.min.js',
	'./jquery.js',
	'./assets/lib/breadcrumb.js'
];

const cssIncludeFile = "./src/styles/sass/output_includes.scss";
const cssOutputPath = "./public/download/css/cu_styles.css";


const sassRender = sass.renderSync({
  file: cssIncludeFile,
  outputStyle: "compressed"
});

console.log(sassRender);
if(sassRender.css){
	fs.writeFile(cssOutputPath, sassRender.css, function(err){
		if(!err){
			console.log("CSS Compiled from ", sassRender.stats.entry);
			console.log("To ", cssOutputPath);
		} else {
			console.log("Error compiling: ", err);
		}
	});
}
