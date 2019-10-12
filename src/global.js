// this file will hold global site variables such as routes inlcuding component and site pages
import Home from "./pages/home"
import About from "./pages/about"
import Components from "./pages/components"
import Buttons from "./pages/buttons"
import Typography from "./pages/typography"
import Pagination from "./pages/pagination"
import Sliders from "./pages/sliders"
import Alerts from "./pages/alerts"
import NoMatch from "./pages/404"

const Global = {
	'name': "Columbia University Design System",
	'pages': [
		{
			'name': "Home",
			'component': Home,
			'path': '/',
			'exact': true,
			'display': false
		},
		{
			'name': "Typography",
			'component': Typography,
			'path': '/typography',
			'exact': false,
			'display': true,
		},
		{
			'name': "Components",
			'component': Components,
			'path': '/components',
			'exact': false,
			'display': true,
			'items': [
				{
					'name': "Buttons",
					'component': Buttons,
					'path': '/components/buttons',
					'exact': false,
				},
				{
					'name': "Alerts",
					'component': Alerts,
					'path': '/components/alerts',
					'exact': false,
				},
				{
					'name': "Pagination",
					'component': Pagination,
					'path': '/components/pagination',
					'exact': false,
				},
				{
					'name': "Sliders",
					'component': Sliders,
					'path': '/components/sliders',
					'exact': false,
				}
			]
		},
		{
			'name': "About",
			'component': About,
			'path': '/about',
			'exact': false,
			'display': true,
		},
		{
			'name': "404",
			'component': NoMatch,
			'path': null,
			'exact': false,
			'display': false,
		}
	]
}

export default Global