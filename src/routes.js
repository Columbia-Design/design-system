// this file will hold global routes inlcuding component and site pages
const Routes = {
	'pages': [
		{
			'name': "Homepage",
			'description': "Main page",
			'component': "home" ,
			'path': '/',
			'exact': true,
			'level': 1
		},
		{
			'name': "About",
			'description': "about page",
			'component': "about" ,
			'path': '/about',
			'exact': false,
			'level': 1
		},
		{
			'name': "Components",
			'description': "Components page",
			'component': "components" ,
			'path': '/components',
			'exact': false,
			'level': 1,
			'items': [
				{
					'name': "Pagination",
					'description': "Pagination examples page",
					'component': "pagination" ,
					'path': '/components/pagination',
					'exact': false,
					'level': 2,
				},
				{
					'name': "Sliders",
					'description': "Sliders examples page",
					'component': "sliders" ,
					'path': '/components/sliders',
					'exact': false,
					'level': 2,
				}
			]
		}
	]
}

export default Routes