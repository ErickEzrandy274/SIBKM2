import { object, string, number } from "yup";

export const navData = [
	{ name: "Home", href: "/" },
	{ name: "Account", href: "/create-account" },
	{ name: "List Product", href: "/product-list" },
	{ name: "FAQs", href: "#" },
	{ name: "About", href: "#" },
];

export const INIT_INPUT = {
	name: "",
	category: "",
	freshness: "",
	image: "",
	description: "",
	price: "",
};

export const ERR_INIT_INPUT = {
	...INIT_INPUT,
};

export const INIT_ACCOUNT_INPUT = {
	firstname: "",
	lastname: "",
	username: "",
	email: "",
	gender: "",
	address: "",
	nasionality: "",
	sport: "",
};

export const options = ["", "FnB", "Cosmetic", "Stationery", "Electronic"];
export const nasionality = ["", "Germany ", "Japan", "Belgium", "Indonesia"];
export const radioValue = ["Brand New", "Second Hand", "Refurbished"];
export const radioValue2 = ["Male", "Female", "Other"];
export const firstInputText = [
	{ name: "firstname", title: "First name" },
	{ name: "lastname", title: "Last name" },
	{ name: "username", title: "Username" },
	{ name: "email", title: "Email" },
];

export const article = {
	title: {
		id: "Buat Produk",
		en: "Create Product",
	},
	description: {
		id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
		en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
	},
};

export const productRegex = /^[A-Za-z ]+$/;
export const productPriceRegex = /^[0-9]*$/;
export const productImageRegex =
	/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;

export const productValidationSchema = object({
	name: string()
		.required("Please enter product name!")
		.matches(/^[A-Za-z ]+$/, "Product name is not valid!"),
	category: string()
		.required("Please choose product category!")
		.matches(/^[A-Za-z ]+$/, "Product category is not valid!"),
	freshness: string()
		.required("Please choose product freshness!")
		.matches(/^[A-Za-z ]+$/, "Product freshness is not valid!"),
	image: string()
		.required("Please choose product image!")
		.matches(
			/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/,
			"Product image is not valid!"
		),
	description: string().required("Please enter product description!"),
	price: string((val) => String(val)).required("Please enter product price!"),
});
