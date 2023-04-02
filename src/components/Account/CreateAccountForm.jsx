import React, { useEffect, useState } from "react";
import "../../assets/css/createAccount.css";
import {
	nasionality,
	INIT_ACCOUNT_INPUT,
	firstInputText,
	radioValue2,
} from "../helper/constant";
import SelectInput from "../Input/SelectInput";
import Input from "../Input/Input";
import RadioInput from "../Input/RadioInput";
import CheckInput from "../Input/CheckInput";

const CreateAccountForm = () => {
	const [input, setInput] = useState(INIT_ACCOUNT_INPUT);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setInput({ ...input, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(input);
	};

	return (
		<div className="container-fluid pt-3 mx-auto">
			<form
				onSubmit={(e) => handleSubmit(e)}
				className="d-flex flex-column gap-3"
			>
				<h2 id="title-form">Detail Account</h2>

				{firstInputText.map(({ name, title }) => {
					return (
						<Input
							key={name}
							name={name}
							title={title}
							type="text"
							onChange={(e) => handleChange(e)}
							placeholder={`Write your ${title.toLowerCase()}`}
							value={input[name]}
						/>
					);
				})}

				<div className="d-flex flex-column gap-1">
					<p id="text-prodFresh">Gender :</p>

					{radioValue2.map((item) => {
						return (
							<RadioInput
								name="gender"
								value={item}
								key={item}
								selected={input.gender}
								onChange={(e) => handleChange(e)}
							/>
						);
					})}
				</div>

				<Input
					name="address"
					title="Address"
					type="text"
					onChange={(e) => handleChange(e)}
					placeholder="Write your Address"
					value={input.address}
				/>

				<SelectInput
					data={nasionality}
					name="nasionality"
					title="Nasionality"
					value={input.nasionality}
					onChange={(e) => handleChange(e)}
				/>

				<CheckInput value={input.sport} onChange={(e) => handleChange(e)} />

				<div>
					<button
						type="submit"
						className="btn btn-primary rounded-md mx-auto mt-5"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateAccountForm;
