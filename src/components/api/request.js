const baseUrl = "https://usman-fake-api.herokuapp.com/api";
const authUrl = baseUrl + "/auth";
const tokenUrl = baseUrl + "/users";
const userUrl = baseUrl + "/users/me";
const recipesUrl = baseUrl + "/recipes";
const productsUrl = baseUrl + "/products";

export const tokenRequest = async (isLoginChecked, user) => {
	const postBody = isLoginChecked
		? { email: user.email, password: user.password }
		: { name: user.name, email: user.email, password: user.password };
	const responseToken = await fetch(isLoginChecked ? authUrl : tokenUrl, {
		method: "POST",
		body: JSON.stringify(postBody),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const resultToken = await responseToken.text();
	if (!responseToken.ok) {
		throw new Error(resultToken);
	}
	return resultToken;
};

export const userRequest = async (resultToken) => {
	const responseUser = await fetch(userUrl, {
		method: "GET",
		headers: {
			"x-auth-token": resultToken,
		},
	});
	if (!responseUser.ok) {
		console.log(resultToken);
		throw new Error(responseUser.statusText);
	}
	const resultUser = await responseUser.json();
	return resultUser;
};

export const recipesRequest = async () => {
	const response = await fetch(recipesUrl);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const result = await response.json();
	// return result;
};
export const productsRequest = async () => {
	const response = await fetch(productsUrl);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const result = await response.json();
	// return result;
};
