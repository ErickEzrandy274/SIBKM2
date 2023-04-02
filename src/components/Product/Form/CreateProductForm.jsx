import React from "react";
import {
	INIT_INPUT,
	options,
	productValidationSchema,
	radioValue,
} from "../../helper/constant";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, selectProducts } from "../../../reduxs/slice/productSlice";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../../../utils/mutations";
import { useNavigate } from "react-router";
import Input from "../../Input/Input";
import RadioInput from "../../Input/RadioInput";
import SelectInput from "../../Input/SelectInput";
import "../../../assets/css/createProduct.css";

const CreateProductForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const products = useSelector(selectProducts);
	const [addNewProduct] = useMutation(ADD_PRODUCT);

	const formik = useFormik({
		initialValues: INIT_INPUT,
		validationSchema: productValidationSchema,
		onSubmit: async (values, { resetForm }) => {
			if (values) {
				const newProduct = {
					...values,
					id: Math.floor(Math.random() * 1000000) + products.length,
				};
				newProduct.price = String(newProduct.price);
				await addNewProduct({ variables: { object: newProduct } });
				dispatch(addProduct(newProduct));
				navigate("/product-list");
				resetForm();
			}
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			id="productForm"
			className="d-flex flex-column gap-3"
		>
			<h2 id="title-form">Detail Product</h2>

			<Input
				name="name"
				title="Product name"
				type="text"
				onChange={formik.handleChange}
				placeholder="Write your product name"
				value={formik.values.name}
				errMsg={formik.errors.name}
			/>

			<SelectInput
				data={options}
				name="category"
				title="Product Category"
				value={formik.values.category}
				onChange={formik.handleChange}
				errMsg={formik.errors.category}
			/>

			<div className="d-flex flex-column gap-1">
				<p id="text-prodFresh">Product Freshness :</p>

				{radioValue.map((item) => {
					return (
						<RadioInput
							name="freshness"
							value={item}
							key={item}
							selected={formik.values.freshness}
							onChange={formik.handleChange}
							errMsg={formik.errors.freshness}
						/>
					);
				})}
			</div>

			<Input
				name="image"
				title="Product Image"
				type="file"
				onChange={formik.handleChange}
				errMsg={formik.errors.image}
			/>

			<Input
				type="text"
				name="description"
				title="Additional Description"
				onChange={formik.handleChange}
				placeholder="Write your product description..."
				value={formik.values.description}
				isTextArea
			/>

			<Input
				name="price"
				title="Product price"
				type="number"
				onChange={formik.handleChange}
				value={formik.values.price}
				placeholder="$ 100"
				errMsg={formik.errors.price}
			/>

			<button
				id="submit-product-form"
				type="submit"
				className="btn btn-primary rounded-md mx-auto mt-5"
			>
				Submit
			</button>
		</form>
	);
};

export default CreateProductForm;
