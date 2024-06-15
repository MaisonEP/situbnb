"use client";

import "./Form.css";

import { FormControl, Input, Stack, Button, Box } from "@chakra-ui/react";

import { useState } from "react";
import {
	DateRangeInput,
	Datepicker,
	OnDatesChangeProps,
	START_DATE,
	END_DATE,
} from "@datepicker-react/styled";

export function BnBForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");

	const [calenderState, setCalenderState] = useState<OnDatesChangeProps>({
		startDate: null,
		endDate: null,
		focusedInput: START_DATE,
	});

	// const staybegin = dayjs(startDate);
	// const stayLength = staybegin.diff(endDate, "day");

	function handleDatesChange(data: OnDatesChangeProps) {
		if (!data.focusedInput) {
			setCalenderState({ ...data, focusedInput: START_DATE });
		} else {
			setCalenderState(data);
		}
	}

	const date = new Date();
	console.log(date);
	return (
		<FormControl isRequired>
			<div className="Ocean">
				<div className="island">
					<Stack spacing={2} padding={5}>
						<Box bg="#f2e2e1" borderRadius="lg" w="100%" p={4} color="white">
							<Datepicker
								startDate={calenderState.startDate}
								endDate={calenderState.endDate}
								focusedInput={calenderState.focusedInput}
								onDatesChange={handleDatesChange}
								displayFormat={"dd/MM/yyyy"}
								minBookingDate={new Date()}
							></Datepicker>
						</Box>
						<Input placeholder="Full Name" size="md" type="text" m={1} />

						<Input placeholder="Email" size="md" type="email" m={1} />

						<Input placeholder="Mobile" size="md" type="number" m={1} />

						<Button colorScheme="teal" variant="solid" size="md" width="20">
							Submit
						</Button>
					</Stack>
				</div>
			</div>
		</FormControl>
	);
}
