import React from "react";

const CheckInput = ({ value, onChange }) => {
	return (
		<div className="form-control">
			<p>Language Spoken :</p>
			<div className="item">
				<input
					id="running"
					name="sport"
					defaultValue="running"
					type="checkbox"
					className="input-checkbox"
					onChange={onChange}
				/>
				<label htmlFor="running">🏃 Running</label>
			</div>
			<div className="item">
				<input
					id="chess"
					name="sport"
					defaultValue="chess"
					type="checkbox"
					className="input-checkbox"
					onChange={onChange}
				/>
				<label htmlFor="chess">♟️ Chess</label>
			</div>
			<div className="item">
				<input
					id="tableTennis"
					name="sport"
					defaultValue="tabletennis"
					type="checkbox"
					className="input-checkbox"
					onChange={onChange}
				/>
				<label htmlFor="tableTennis">🏓 Table Tennis</label>
			</div>
		</div>
	);
};

export default CheckInput;
