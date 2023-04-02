import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ERR_INIT_INPUT } from "../../helper/constant";
import { handleChange } from "../../helper/function";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../reduxs/slice/productSlice";
import { ADD_NEW_COMMENT, UPDATE_PRODUCT } from "../../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PRODUCT_COMMENTS } from "../../../utils/queries";
import { v4 } from "uuid";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import CommentCard from "../../Card/CommentCard";
import "../../../assets/css/detailProductPage.css";

const DetailProductPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { state } = useLocation();
	const [input, setInput] = useState(state.product);
	const [errMsg, setErrMsg] = useState(ERR_INIT_INPUT);
	const [isEdited, setIsEdited] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState("");
	const [updateProduct] = useMutation(UPDATE_PRODUCT);
	const [addNewComment, { loading: addLoading }] = useMutation(
		ADD_NEW_COMMENT,
		{
			refetchQueries: [{ query: GET_PRODUCT_COMMENTS }, "GetProductComments"],
		}
	);
	const { data, loading } = useQuery(GET_PRODUCT_COMMENTS, {
		variables: { product_id: input.id },
	});

	const handleSave = async () => {
		await updateProduct({
			variables: {
				id: input.id,
				name: input.name,
				description: input.description,
				price: String(input.price),
			},
		});
		dispatch(editProduct(input));
		setIsEdited(false);
	};

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};

	const handleTambahComment = async (e) => {
		e.preventDefault();
		await addNewComment({
			variables: { content, product_id: input.id, id: v4() },
		});
		setIsOpen(false);
		setContent("");
	};

	return (
		<div
			id="detailProductWrapper"
			className="container d-flex flex-lg-row flex-column gap-3 min-vh-100"
		>
			<div className="w-50 p-3">
				<div className="d-flex gap-4">
					<Button
						onClick={() => navigate("/product-list")}
						className="btn btn-danger"
						name="Back"
					/>

					<Button
						onClick={() => setIsEdited((old) => !old)}
						className={`btn ${isEdited ? "btn-secondary" : "btn-success"}`}
						name={isEdited ? "Cancel" : "Edit"}
					/>

					{isEdited && (
						<div>
							<Button
								onClick={handleSave}
								className="btn btn-primary w-f"
								name="Save"
							/>
						</div>
					)}
				</div>

				<div className="d-flex flex-column gap-2 w-50">
					{isEdited ? (
						<section>
							<Input
								name={"name"}
								title={"Product name"}
								type="text"
								onChange={(e) => handleChange(e, input, setInput, setErrMsg)}
								placeholder={`Write your product name`}
								value={input.name}
								errMsg={errMsg.name}
							/>
						</section>
					) : (
						<h3>Nama Produk: {input.name}</h3>
					)}

					<div>ID: {input.id}</div>
					<div>Kategori: {input.category}</div>
					<div>
						<p>Image:</p>
						<img src={input.image} alt={input.image} width={100} height={100} />
					</div>
					<div>Freshness: {input.freshness}</div>

					{isEdited ? (
						<section>
							<Input
								name={"description"}
								title={"Product Description"}
								type="text"
								onChange={(e) => handleChange(e, input, setInput, setErrMsg)}
								placeholder={`Write your product description`}
								value={input.description}
								errMsg={errMsg.description}
								isTextArea
							/>
						</section>
					) : (
						<div>Description: {input.description}</div>
					)}

					{isEdited ? (
						<section>
							<Input
								name={"price"}
								title={"Product Price"}
								type="number"
								onChange={(e) => handleChange(e, input, setInput, setErrMsg)}
								placeholder={`$ 100`}
								value={input.price}
								errMsg={errMsg.price}
							/>
						</section>
					) : (
						<div>Price: {input.price}</div>
					)}
				</div>
			</div>

			<div className="d-flex flex-column gap-2 w-50 p-3">
				<div className="d-flex justify-content-between">
					<h3>Komentar Terkait Produk</h3>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => setIsOpen(true)}
					>
						Tambah Komentar
					</button>
				</div>

				{isOpen && (
					<form onSubmit={handleTambahComment}>
						<div className="d-flex flex-column">
							<label htmlFor="comment" className="form-label">
								Komentar Baru
							</label>

							<input
								required
								className="form-control"
								id="comment"
								placeholder="Masukkan komentar baru"
								onChange={handleContentChange}
							/>
						</div>

						<div className="d-flex gap-3 justify-content-end">
							<button
								className="btn btn-danger"
								onClick={() => setIsOpen(false)}
							>
								Batal
							</button>
							<button type="submit" className="btn btn-success">
								Simpan
							</button>
						</div>
					</form>
				)}

				<div className="d-flex flex-column gap-2 overflow-y-auto">
					{loading || addLoading ? (
						<p className="text-primary fw-semibold">Loading...</p>
					) : data.comment.length ? (
						data.comment.map((item) => {
							return <CommentCard key={item.id} {...item} />;
						})
					) : (
						<p className="text-danger fw-semibold">
							Belum ada komentar terkait produk ini
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default DetailProductPage;
