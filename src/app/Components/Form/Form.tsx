"use client";

import "./Form.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { useState } from "react";

export function BnBForm() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");

	function submit() {
		return;
	}

	return (
		<div className="Ocean">
			<div className="island">
				<form
					className="form"
					onSubmit={(e) => {
						e.preventDefault();
						submit();
						console.log(e);
					}}
				>
					<label className="formLabels">
						Start Date:
						<DatePicker
							selected={startDate}
							onSelect={(d) => {
								setStartDate(d);
							}}
							className="calander"
						>
							Date
						</DatePicker>
					</label>
					<label className="formLabels">
						End Date:
						<DatePicker
							selected={endDate}
							onSelect={(d) => {
								setEndDate(d);
							}}
							className="calander"
						>
							Date
						</DatePicker>
					</label>
					<label className="formLabels">
						Name:
						<input
							className="input"
							onChange={(e) => {
								setName(e.target.value);
							}}
						></input>
					</label>
					<label className="formLabels">
						Email:
						<input
							className="input"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						></input>
					</label>
					<label className="formLabels">
						Mobile:
						<input
							className="input"
							onChange={(e) => {
								setMobile(e.target.value);
							}}
						></input>
					</label>

					<button className="submitButton" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
