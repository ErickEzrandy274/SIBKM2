import React, { useState } from "react";
import { article } from "../../helper/constant";

const FormHeader = () => {
	const { title, description } = article;
	const [isEnglanguage, setEngLanguage] = useState(true);

	const handleClick = () => {
		setEngLanguage((old) => !old);
	};

	return (
		<>
			<div className="d-flex justify-content-end">
				<button className="btn btn-primary" onClick={handleClick}>
					Switch to {isEnglanguage ? "ID" : "ENG"}
				</button>
			</div>

			<div className="d-flex flex-column gap-2 text-center pt-3">
				<h1 id="title">{isEnglanguage ? title.en : title.id}</h1>
				<p id="subtitle">{isEnglanguage ? description.en : description.id}</p>
			</div>
		</>
	);
};

export default FormHeader;
