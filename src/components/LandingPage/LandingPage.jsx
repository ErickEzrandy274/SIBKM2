import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../utils/queries";
import { useNavigate } from "react-router";
import techImg from "../../assets/img/tech-img.png";
import ProductCard from "../Card/ProductCard";
import "../../assets/css/landingPage.css";

const LandingPage = () => {
	const navigate = useNavigate();
	const { data, loading } = useQuery(GET_PRODUCTS, { variables: { limit: 3 } });

	const handleLoadMore = () => {
		navigate("/product-list");
	};

	return (
		<>
			<Navbar />
			<main>
				<section
					id="first-section"
					className="d-flex flex-lg-row flex-column justify-content-center"
				>
					<div className="my-auto text-white w-50 d-lg-block d-none">
						<h1 id="first-section-title" className="fw-bold">
							Better Solutions For Your Business
						</h1>
						<p id="subtitle">
							We are team of talented designers making websites with Bootstrap
						</p>
						<div className="d-flex align-items-center gap-4 w-50">
							<a href="#" id="get-started" className="rounded-pill">
								Get Started
							</a>
							<a href="#">Watch Video</a>
						</div>
					</div>
					<div>
						<img id="tech-img" src={techImg} alt="tech image" />
					</div>
					<div className="my-auto text-white d-block d-lg-none">
						<h1 id="first-section-title" className="fw-bold">
							Better Solutions For Your Business
						</h1>
						<p id="subtitle">
							We are team of talented designers making websites with Bootstrap
						</p>
						<div className="d-flex align-items-center gap-4">
							<a href="#" id="get-started" className="rounded-pill">
								Get Started
							</a>
							<a href="#">Watch Video</a>
						</div>
					</div>
				</section>

				<section id="second-section">
					<h2 className="px-3 fw-semibold">PRODUCT LIST</h2>
					<div className="d-flex flex-column gap-4">
						<div className="d-flex flex-lg-row flex-column align-items-center gap-lg-0 gap-5 justify-content-between">
							{loading ? (
								<p>Loading...</p>
							) : (
								data.product.map((item, index) => {
									return <ProductCard key={item.id} {...item} />;
								})
							)}
						</div>

						<div className="d-flex justify-content-end">
							<button
								onClick={handleLoadMore}
								id="loadMore"
								className="btn btn-primary rounded"
							>
								Load more...
							</button>
						</div>
					</div>
				</section>

				<section id="third-section" className="text-center">
					<h2 className="fw-semibold">Join Our Newsletter</h2>
					<p>
						Tamen quem nulla quae legam multos aute sint culpa legam noster
						magna
					</p>
					<form className="d-flex flex-row align-items-center justify-content-between shadow rounded-pill mx-auto">
						<input className="rounded-start-pill text-black" type="text" />
						<button type="submit" className="btn subscribe rounded-pill">
							Subscribe
						</button>
					</form>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default LandingPage;
