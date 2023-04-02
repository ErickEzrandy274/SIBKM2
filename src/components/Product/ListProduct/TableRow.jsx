import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../reduxs/slice/productSlice";
import { DELETE_PRODUCT } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";

const TableRow = ({
	id,
	name,
	category,
	image,
	freshness,
	description,
	price,
	index,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [deleteOldProduct] = useMutation(DELETE_PRODUCT);
	const [isDeleted, setIsDeleted] = useState(false);

	const handleDelete = async () => {
		const isDeleted = confirm(
			`Apakah kamu yakin ingin menghapus product ${name} ?`
		);

		if (isDeleted) {
			await deleteOldProduct({ variables: { id } }).then(() => {
				dispatch(deleteProduct(id));
				setIsDeleted(true);
			});
			return;
		}

		return;
	};

	const handleClick = () => {
		// reference https://stackoverflow.com/questions/42173786/react-router-pass-data-when-navigating-programmatically
		navigate(`/product/${name}`, {
			state: {
				product: {
					id,
					name,
					category,
					image,
					freshness,
					description,
					price,
				},
			},
		});
	};

	return isDeleted ? null : (
		<tr>
			<th scope="row">{index + 1}</th>
			<td>{name}</td>
			<td>{category}</td>
			<td>{freshness}</td>
			<td>{price}</td>
			<td className="d-flex gap-3">
				<div>
					<Button
						onClick={handleClick}
						className="btn btn-primary"
						name="Detail"
					/>
				</div>
				<div>
					<Button
						onClick={handleDelete}
						className="btn btn-danger"
						name="Delete"
					/>
				</div>
			</td>
		</tr>
	);
};

TableRow.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	freshness: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

export default TableRow;
