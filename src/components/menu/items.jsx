import { Home, Products, PrivateRecipes, PageNotFound } from "../pages";

export const menuItems = [
	{
		title: "Home",
		classname: "menuItem",
		route: "/",
		picture: "",
		alt: "home",
		page: () => <Home />,
		privat: false,
	},
	{
		title: "Products",
		classname: "menuItem",
		route: "/products",
		picture: "",
		alt: "products",
		page: () => <Products />,
		privat: false,
	},
	{
		title: "Recipes",
		classname: "menuItem",
		route: "/privaterecipes",
		picture: "",
		alt: "privaterecipes",
		page: () => <PrivateRecipes />,
		privat: true,
	},
	{
		title: "404",
		classname: "menuItem",
		route: "/anyPage",
		picture: "",
		alt: "404",
		page: () => <PageNotFound />,
		privat: false,
	},
];
