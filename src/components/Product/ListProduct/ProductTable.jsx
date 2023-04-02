import React from "react";
import TableRow from "./TableRow";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSubscription } from "@apollo/client";
import { SUBS_PRODUCTS } from "../../../utils/subscription";
import { setProduct } from "../../../reduxs/slice/productSlice";

const ProductTable = () => {
	const nav = useNavigate();
	const { data, loading } = useSubscription(SUBS_PRODUCTS);
	const dispatch = useDispatch();

	if (!loading) {
		dispatch(setProduct(data.product));
	}

	return (
		<section
			id="list-product"
			className="d-flex flex-column gap-3 w-50 mx-auto min-vh-100"
		>
			<h2 className="text-center fw-bold">List Product</h2>

			<div className="mx-auto" onClick={() => nav("/create-product")}>
				<button className="btn btn-primary">Create Product</button>
			</div>

			<table className="table table-striped text-center">
				<thead>
					<tr>
						<th scope="col">No</th>
						<th scope="col">Product Name</th>
						<th scope="col">Product Category</th>
						<th scope="col">Product Freshness</th>
						<th scope="col">Product Price</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody id="table-body">
					{loading ? (
						<tr>
							<td className="py-3 fw-semibold" colSpan={7}>
								Loading...
							</td>
						</tr>
					) : data.product.length > 0 ? (
						data.product.map((item, index) => {
							return <TableRow index={index} key={item.id} {...item} />;
						})
					) : (
						<tr>
							<td className="py-3 fw-semibold" colSpan={7}>
								Tidak ada data!
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</section>
	);
};

export default ProductTable;
