// copy over build folder for gh-pages
// this is a small script to trigger gh-pages build with a custom subfolder for static pages
// directory that is output by snap script is in build folder and should be used for gh-pages
const ghpages = require('gh-pages');
const replace = require('replace-in-file');
const fs = require('fs-extra');

fs.copy('./build', './gh-pages', err =>{
  if(err) return console.error(err);
  let globs = ['gh-pages/*.html', 'gh-pages/*/*.html', 'gh-pages/asset-manifest.json'];

	const results = replace.sync({
		files: globs,
		from: [/href="\//g, /src="\//g],
		to: ['href="/desing-system/', 'src="/desing-system/'],
		countMatches: true
	});

	console.log(results);

	if(results) {

		ghpages.publish('./gh-pages', {
			branch: 'gh-pages'
		}, function(err) {
			if(err){
				console.log("Something went wrong while publishing to gh-pages branch: ", err);
			} else {
				console.log("all good publishing");
			}
		});
	}

});




//think about creating a different folder where we modify rel base path to be within github cu-design-system