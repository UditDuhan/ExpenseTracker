import React, { useState } from "react";

const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	return (
		<React.Fragment>
			<h3>Add new Transaction</h3>
			<form id="form">
				<div id="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						id="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, postive - income)
					</label>
					<input
						type="number"
						id="amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount..."
					/>
				</div>
				<button className="btn">Add Transaction</button>
			</form>
		</React.Fragment>
	);
};
export default AddTransaction;
