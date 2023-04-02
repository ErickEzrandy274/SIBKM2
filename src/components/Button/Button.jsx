import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, className, onClick }) => {
	return (
		<button onClick={onClick} id={name.toLowerCase()} className={className}>
			{name}
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Button;
