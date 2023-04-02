import React from "react";
import PropTypes from "prop-types";

const Input = ({
	name,
	type,
	onChange,
	title,
	value,
	placeholder,
	isTextArea,
	errMsg,
}) => {
	return (
		<div className="d-flex flex-column gap-1">
			{title && <label htmlFor={name}>{title} :</label>}
			{isTextArea ? (
				<textarea
					aria-label={name}
					name={name}
					cols={10}
					rows={3}
					value={value}
					onChange={onChange}
					placeholder={placeholder ? placeholder : ""}
					className="form-control"
				/>
			) : (
				<input
					onChange={onChange}
					type={type}
					id={name}
					name={name}
					value={value}
					placeholder={placeholder ? placeholder : ""}
					className="form-control"
				/>
			)}
			{errMsg && <span className="text-danger fw-bold fs-6">{errMsg}</span>}
		</div>
	);
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	errMsg: PropTypes.string,
	placeholder: PropTypes.string,
	isTextArea: PropTypes.bool,
};

Input.defaultProps = {
	isTextArea: false,
	placeholder: "",
	errMsg: "",
};

export default Input;
