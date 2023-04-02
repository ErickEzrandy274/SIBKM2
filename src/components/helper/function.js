import {
	ERR_INIT_INPUT,
	productImageRegex,
	productPriceRegex,
	productRegex,
} from "./constant";

export const checkErrorMessage = (error) => {
	return Object.values(error).every((el) => el === "");
};

export const handleChange = (e, input, setInput, setErrMsg) => {
	const { name, value } = e.target;

	setInput(
		name === "productImage"
			? { ...input, [name]: e.target.files[0].name }
			: { ...input, [name]: value }
	);

	if (name === "productName") {
		if (!productRegex.test(value)) {
			setErrMsg((old) => {
				return { ...old, productName: "Nama produk tidak valid!" };
			});
			return;
		}

		if (value.length > 25) {
			setErrMsg((old) => {
				return {
					...old,
					productName: "Nama produk tidak boleh lebih dari 25 karakter!",
				};
			});
			return;
		}
	}

	if (name === "productCategory" && !productRegex.test(value)) {
		setErrMsg((old) => {
			return { ...old, productCategory: "Kategori produk tidak valid!" };
		});
		return;
	}

	if (name === "productFresh" && !productRegex.test(value)) {
		setErrMsg((old) => {
			return { ...old, productFresh: "Produk freshness tidak valid!" };
		});
		return;
	}

	if (name === "productPrice" && !productPriceRegex.test(+value)) {
		setErrMsg((old) => {
			return { ...old, productPrice: "Input Anda tidak valid!" };
		});
		return;
	}

	if (name === "productImage" && !productImageRegex.test(value)) {
		setErrMsg((old) => {
			return { ...old, productImage: "Gambar produk tidak valid!" };
		});
		return;
	}

	setErrMsg(ERR_INIT_INPUT);
};
