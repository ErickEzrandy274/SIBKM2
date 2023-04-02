import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({ data, name, value, title, onChange }) => {
	return (
		<div className="d-flex flex-column gap-1">
			<label htmlFor={name}>{title} :</label>
			<select name={name} id={name} value={value} onChange={(e) => onChange(e)}>
				{data.map((item) => {
					return (
						<option disabled={item === "Choose..."} value={item} key={item}>
							{item === "" ? "Choose..." : item}
						</option>
					);
				})}
			</select>
		</div>
	);
};

SelectInput.propTypes = {
	data: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default SelectInput;
