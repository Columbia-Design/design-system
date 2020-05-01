// copy over build folder for gh-pages
// this is a small script to trigger gh-pages build with a custom subfolder for static pages
// directory that is output by snap script is in build folder and should be used for gh-pages
const ghpages = require('gh-pages');
const replace = require('replace-in-file');
const fs = require('fs-extra');

fs.copy('./build', './gh-pages', err =>{
  if(err) return console.error(err);
	ghpages.publish('./gh-pages', {
		branch: 'gh-pages'
	}, function(err) {
		if(err){
			console.log("Something went wrong while publishing to gh-pages branch: ", err);
		} else {
			console.log("all good publishing");
		}
	});
});
