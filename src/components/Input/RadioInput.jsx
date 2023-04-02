import React from "react";
import PropTypes from "prop-types";

const RadioInput = ({ name, value, selected, onChange }) => {
	return (
		<label className="d-flex gap-2 align-items-center radio-label">
			<input
				onChange={(e) => onChange(e)}
				name={name}
				id={name}
				value={value}
				type="radio"
				checked={value === selected}
			/>
			{value}
		</label>
	);
};

RadioInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	selected: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default RadioInput;
