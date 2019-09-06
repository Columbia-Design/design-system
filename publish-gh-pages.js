// this is a small script to trigger gh-pages build with a custom subfolder for static pages
// directory that is output by snap script is in build folder and should be used for gh-pages
const ghpages = require('gh-pages');
const replace = require('replace-in-file');

let globs = ['build/*.html', 'build/*/*.html', 'build/asset-manifest.json'];

const results = replace.sync({
	files: globs,
	from: [/href="\//g, /src="\//g],
	to: ['href="/cu_design_system/', 'src="/cu_design_system/'],
	countMatches: true
});

console.log(results);

if(results) {

	ghpages.publish('build', {
		branch: 'gh-pages'
	}, function(err) {
		if(err){
			console.log("Something went wrong while publishing to gh-pages branch: ", err);
		} else {
			console.log("all good publishing");
		}
	});
}



//think about creating a different folder where we modify rel base path to be within github cu-design-system