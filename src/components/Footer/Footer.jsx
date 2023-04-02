import React from "react";

const Footer = () => {
	return (
		<footer>
			<div
				id="first-footer"
				className="d-flex flex-lg-row flex-column justify-content-between gap-lg-5 gap-4"
			>
				<section className="first-footer-content">
					<h2 className="item-title fw-bold mb-4">ARSHA</h2>
					<p>A108 Adam Street New York, NY 535022 United States</p>
					<div>
						<p>
							<span className="fw-bold">Phone:</span> +1 5589 55488 55
						</p>
						<p>
							<span className="fw-bold">Email:</span> info@example.com
						</p>
					</div>
				</section>
				<section className="first-footer-content">
					<h3 className="item-title fw-bold mb-4">Useful Links</h3>
					<div className="item-section">
						<p>Home</p>
						<p>About us</p>
						<p>Services</p>
						<p>Terms of service</p>
						<p>Privacy policy</p>
					</div>
				</section>
				<section className="first-footer-content">
					<h3 className="item-title fw-bold mb-4">Our Services</h3>
					<div className="item-section">
						<p>Web Design</p>
						<p>Web Development</p>
						<p>Product Management</p>
						<p>Marketing</p>
						<p>Graphic Design</p>
					</div>
				</section>
				<section className="first-footer-content">
					<h3 className="item-title fw-bold mb-4">Our Social Networks</h3>
					<div className="item-section">
						<p>
							Cras fermentum odio eu feugiat lide par naso tierra videa magna
							derita valies
						</p>
					</div>
					<div className="d-flex gap-3">
						<a href="#">
							<i
								style={{ fontSize: "2rem", color: "cornflowerblue" }}
								className="bi bi-twitter"
							/>
						</a>
						<a href="#">
							<i
								style={{ fontSize: "2rem", color: "cornflowerblue" }}
								className="bi bi-instagram"
							/>
						</a>
						<a href="#">
							<i
								style={{ fontSize: "2rem", color: "cornflowerblue" }}
								className="bi bi-facebook"
							/>
						</a>
						<a href="#">
							<i
								style={{ fontSize: "2rem", color: "cornflowerblue" }}
								className="bi bi-linkedin"
							/>
						</a>
					</div>
				</section>
			</div>
			<div
				id="last-footer"
				className="d-flex flex-lg-row flex-column justify-content-between"
			>
				<p>
					© Copyright <span className="fw-bold">Arsha</span>. All Rights
					Reserved
				</p>
				<p>
					Designed by{" "}
					<a id="boots-ref" href="https://getbootstrap.com/">
						BootstrapMade
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
