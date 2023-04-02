import React from "react";
import { navData } from "../helper/constant";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
	const { pathname } = useLocation();

	return (
		<header className="container mb-5">
			<nav className="fixed-top navbar navbar-expand-lg shadow-lg">
				<div className="container-fluid row">
					<a className="navbar-brand col-lg-9 col-3" href="#">
						Simple Header
					</a>
					<button
						className="navbar-toggler col-2 d-lg-none"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse px-0"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav fw-medium align-items-center col-lg-3">
							{navData.map(({ name, href }) => {
								return (
									<Link
										className={`nav-link ${
											href === pathname ? "active" : "not-active"
										}`}
										to={href}
										key={name}
									>
										{name}
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
