import React, { useEffect, useState } from "react";
import CreateProductForm from "./CreateProductForm";
import FormHeader from "../Form/FormHeader";
import "../../../assets/css/createProduct.css";

const CreateProductWrapper = () => {
	return (
		<main className="d-flex flex-column gap-3 justify-content-center align-items-center">
			<section id="createProduct" className="mx-auto">
				<FormHeader />
				<CreateProductForm />
			</section>
		</main>
	);
};

export default CreateProductWrapper;
