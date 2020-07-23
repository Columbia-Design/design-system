// this file exports pages and custom components as one global variable
import Home from "./pages/home";
import About from "./pages/about";
import GettingStarted from "./pages/gettingstarted";
import Developer from "./pages/developer";
import Accordions from "./pages/accordions";
import Buttons from "./pages/buttons";
import Heroes from "./pages/heroes";
import Typography from "./pages/typography";
import Images from "./pages/images";
import Pagination from "./pages/pagination";
import Pullquote from "./pages/pullquote";
import Sliders from "./pages/sliders";
import Tables from "./pages/tables";
import Icons from "./pages/icons";
import Breadcrumb from "./pages/breadcrumb";
import Alerts from "./pages/alerts";
import Modal from "./pages/modal";
import ProgressBars from "./pages/progressbars";
import Dropdown from "./pages/dropdown";
import NoMatch from "./pages/404";
import Contribute from "./pages/contribute";
import ReleaseNotes from "./pages/releasenotes";


const Global = {
	'name': "Columbia University Design System",
	'pages': [{
			'name': "Design System",
			'component': Home,
			'path': '/',
			'exact': true,
			'display': false
		},
		{
			'name': "About",
			'component': About,
			'path': '/about',
			'exact': false,
			'display': true,
		},
		{
			'name': "Getting Started",
			'component': GettingStarted,
			'path': '/start',
			'exact': false,
			'display': true,
			'items': [{
				'name': "Developer Guide",
				'component': Developer,
				'path': '/start/developer',
				'exact': false,
			}],
		},
		{
			'name': "Content",
			'component': Typography,
			'path': '/content',
			'exact': false,
			'display': true,
			'items': [{
				'name': "Typography",
				'component': Typography,
				'path': '/content',
				'exact': true,
			}, {
				'name': "Images",
				'component': Images,
				'path': '/content/images',
				'exact': false,
			}, {
				'name': "Tables",
				'component': Tables,
				'path': '/content/tables',
				'exact': false,
			}],
		},
		{
			'name': "Components",
			'component': Accordions,
			'path': '/components',
			'exact': false,
			'display': true,
			'items': [{
				'name': "Accordions",
				'component': Accordions,
				'path': '/components',
				'exact': true,
			},
			{
				'name': "Alerts",
				'component': Alerts,
				'path': '/components/alerts',
				'exact': false,
			},
			{
				'name': "Breadcrumb",
				'component': Breadcrumb,
				'path': '/components/breadcrumb',
				'exact': false,
			},
			{
				'name': "Buttons",
				'component': Buttons,
				'path': '/components/buttons',
				'exact': false,
			},
			{
				'name': "Drop Down",
				'component': Dropdown,
				'path': '/components/dropdown',
				'exact': false,
			},
			{
				'name': "Heroes",
				'component': Heroes,
				'path': '/components/heroes',
				'exact': false,
			},
			{
				'name': "Modal",
				'component': Modal,
				'path': '/components/modal',
				'exact': false,
			},
			{
				'name': "Pagination",
				'component': Pagination,
				'path': '/components/pagination',
				'exact': false,
			},
			{
				'name': "Pullquote",
				'component': Pullquote,
				'path': '/components/pullquote',
				'exact': false,
			},
			{
				'name': "Progress Bar",
				'component': ProgressBars,
				'path': '/components/progressbars',
				'exact': false,
			},
			{
				'name': "Sliders",
				'component': Sliders,
				'path': '/components/sliders',
				'exact': false,
			},
			{
				'name': "Icons",
				'component': Icons,
				'path': '/components/icons',
				'exact': false,
			}
		]},
		{
			'name': "Contribute",
			'component': Contribute,
			'path': '/contribute',
			'exact': false,
			'display': true,
		},
		{
			'name': "Release Notes",
			'component': ReleaseNotes,
			'path': '/release-notes',
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
	],
};

export default Global;