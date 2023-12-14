import { Home, News, PrivateNews, PageNotFound } from "../pages";

export const menuItems = [
	{
		title: "Home",
		classname: "homeItem",
		route: "/",
		picture: "",
		alt: "home",
		page: () => <Home />,
		privat: false,
	},
	{
		title: "Products",
		classname: "newsItem",
		route: "/news",
		picture: "",
		alt: "news",
		page: () => <News />,
		privat: false,
	},
	{
		title: "Recipes",
		classname: "privateNewsItem",
		route: "/privatenews",
		picture: "",
		alt: "privatenews",
		page: () => <PrivateNews />,
		privat: true,
	},
	{
		title: "404",
		classname: "404Item",
		route: "/anyPage",
		picture: "",
		alt: "404",
		page: () => <PageNotFound />,
		privat: false,
	},
];
