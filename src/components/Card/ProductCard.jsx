import React from "react";
import { useNavigate } from "react-router";
import "../../assets/css/landingPage.css";

const ProductCard = ({
	id,
	name,
	category,
	image,
	freshness,
	description,
	price,
}) => {
	const navigate = useNavigate();
	const goToDetailPage = () => {
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

	return (
		<section>
			<div className="card">
				<img src={image} className="card-img-top" alt="product-3" />
				<div className="card-body">
					<p className="card-title">{name}</p>
					<p className="card-text">{description}</p>
					<div className="d-flex justify-content-between align-items-center">
						<button
							onClick={goToDetailPage}
							className="fromCard btn btn-outline-secondary text-secondary"
						>
							Detail View
						</button>
						<p className="text-secondary duration">9 mins</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductCard;
