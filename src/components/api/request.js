const baseUrl = "https://usman-fake-api.herokuapp.com/api";
const authUrl = baseUrl + "/auth";
const tokenUrl = baseUrl + "/users";
const userUrl = baseUrl + "/users/me";
// const recipesUrl = baseUrl + "/recipes";
const productsUrl = baseUrl + "/products";

export const tokenRequest = async (isLoginChecked, user) => {
	const postBody = isLoginChecked
		? { email: user.email, password: user.password }
		: { name: user.name, email: user.email, password: user.password };
	const response = await fetch(isLoginChecked ? authUrl : tokenUrl, {
		method: "POST",
		body: JSON.stringify(postBody),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const result = await response.text();
	if (!response.ok) {
		throw new Error(result);
	}
	return result;
};

export const userRequest = async (resultToken) => {
	const response = await fetch(userUrl, {
		method: "GET",
		headers: {
			"x-auth-token": resultToken,
		},
	});
	if (!response.ok) {
		console.log(resultToken);
		throw new Error(response.statusText);
	}
	const result = await response.json();
	return result;
};

export const listRequest = async (url) => {
	const response = await fetch(baseUrl + url);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const result = await response.json();
	return result;
};
// export const productsRequest = async () => {
// 	const response = await fetch(productsUrl);
// 	if (!response.ok) {
// 		throw new Error(response.statusText);
// 	}
// 	const result = await response.json();
// 	// return result;
// };
