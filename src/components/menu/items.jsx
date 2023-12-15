import { Home, Products, PrivateRecipes, PageNotFound } from "../pages";

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
		classname: "productsItem",
		route: "/products",
		picture: "",
		alt: "products",
		page: () => <Products />,
		privat: false,
	},
	{
		title: "Recipes",
		classname: "privateRecipesItem",
		route: "/privaterecipes",
		picture: "",
		alt: "privaterecipes",
		page: () => <PrivateRecipes />,
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
