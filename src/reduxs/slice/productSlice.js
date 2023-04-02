import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	products: [],
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const { products } = state;

			return {
				products: [...products, action.payload],
			};
		},

		deleteProduct: (state, action) => {
			const { products } = state;
			const newProducts = products.filter((item) => item.id !== action.payload);

			return {
				products: newProducts,
			};
		},

		editProduct: (state, action) => {
			const { products } = state;
			const newProducts = products.map((item) => {
				if (item.id === action.payload.id) {
					return action.payload;
				}

				return item;
			});

			return {
				products: newProducts,
			};
		},

		setProduct: (state, action) => {
			return {
				...state.products,
				products: action.payload,
			};
		},
	},
});

export const selectProducts = ({ products }) => {
	return products.products;
};

export const { addProduct, deleteProduct, editProduct, setProduct } =
	productSlice.actions;
const productsReducer = productSlice.reducer;
export default productsReducer;
