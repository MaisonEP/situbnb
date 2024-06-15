"use client";

import "./Form.css";
import "react-day-picker/dist/style.css";
import { FormControl, Input, Stack, Button, Box } from "@chakra-ui/react";
import { addDays } from "date-fns";

import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";

export function BnBForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [isClosed, setIsClosed] = useState(true);

	// const [calenderState, setCalenderState] = useState<OnDatesChangeProps>({
	// 	startDate: null,
	// 	endDate: null,
	// 	focusedInput: null,
	// });

	// const staybegin = dayjs(startDate);
	// const stayLength = staybegin.diff(endDate, "day");

	// function handleDatesChange(data: OnDatesChangeProps) {
	// 	if (!data.focusedInput) {
	// 		setCalenderState({ ...data, focusedInput: START_DATE });
	// 	} else {
	// 		setCalenderState(data);
	// 	}
	// }
	const initialRange: DateRange = {
		from: new Date(),
		to: addDays(new Date(), 4),
	};

	const [range, setRange] = useState<DateRange | undefined>(initialRange);
	function close() {
		if (isClosed === true) {
			setIsClosed(false);
		} else {
			setIsClosed(true);
		}
	}

	const date = new Date();
	console.log(date);
	return (
		<FormControl isRequired>
			<div className="Ocean">
				<div className="island">
					<Stack className="stackContainer" spacing={2}>
						<Box
							bg="#f5b593"
							borderRadius="32px"
							// w="100%"
							p={4}
							color="white"
							display={"flex"}
							justifyContent={"center"}
						>
							<DayPicker
								className="dateSelector"
								style={{ margin: 0 }}
								mode="range"
								selected={range}
								onSelect={(e) => {
									setRange(e);
									console.log(e);
								}}
								disabled={{ before: new Date() }}
							/>
						</Box>
						<Box
							p={4}
							alignItems={"center"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Input placeholder="Full Name" size="md" type="text" m={1} />

							<Input placeholder="Email" size="md" type="email" m={1} />

							<Input placeholder="Mobile" size="md" type="number" m={1} />

							<Button
								bg="rgb(135, 78, 50)"
								color={"white"}
								variant="solid"
								size="md"
								width="20"
								_hover={{ bg: " rgba(135, 78, 50, 0.813)" }}
							>
								Submit
							</Button>
						</Box>
					</Stack>
				</div>
			</div>
		</FormControl>
	);
}
