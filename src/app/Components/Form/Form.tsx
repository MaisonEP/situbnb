"use client";
import { useParams } from "next/navigation";
import "./Form.css";
import "react-day-picker/dist/style.css";
import {
	FormControl,
	Input,
	Stack,
	Button,
	Box,
	Heading,
	ButtonGroup,
} from "@chakra-ui/react";
import {
	addDays,
	formatDistanceStrict,
	intervalToDuration,
	set,
} from "date-fns";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import Carousel from "../Carousel/Carousel";
import { parse } from "path";
import { BnbDataResponse } from "@/app/Api/GetBnBData/route";
import { title } from "process";

export function BnBForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [stayLength, setStayLength] = useState<string | undefined>();
	const [buttonState, setButtonState] = useState<boolean | undefined>(true);
	const [images, setImages] = useState<string[]>([]);
	const [data, setData] = useState<BnbDataResponse>();

	const submitToast = useToast();
	const initialRange: DateRange = {
		from: set(new Date(), { hours: 0, minutes: 0, seconds: 0 }),
		to: addDays(set(new Date(), { hours: 0, minutes: 0, seconds: 0 }), 0),
	};

	const [range, setRange] = useState<DateRange | undefined>(initialRange);

	const params = useParams();
	// console.log(params.location);

	useEffect(() => {
		function distance() {
			if (range?.from !== undefined && range?.to !== undefined) {
				const rangeDistance = formatDistanceStrict(range?.from, range?.to, {
					unit: "day",
				});
				return rangeDistance;
			}
		}

		const stay = distance();
		setStayLength(stay);

		async function bnbImages() {
			const response = await fetch("/Api/GetBnBData/" + params.location, {
				headers: { Accept: "application/json" },
				method: "GET",
			});

			const result = await response.json();
			setData(result[0]);
			setImages(result[0].Images);
		}
		bnbImages();
	}, [range]);

	useEffect(() => {
		if (
			Boolean(stayLength) &&
			Boolean(name) &&
			Boolean(email) &&
			Boolean(mobile) &&
			Boolean(range)
		) {
			setButtonState(false);
		} else {
			setButtonState(true);
		}
	}, [stayLength, name, email, mobile]);
	// function checkIn() {
	// 	let checkinDate = "";
	// 	const checkIn = [
	// 		range?.from?.getDate(),
	// 		range?.from?.getMonth(),
	// 		range?.from?.getFullYear(),
	// 	];

	// 	checkIn.length > 3 ? (checkinDate = checkIn.toString()) : checkinDate;

	// 	return checkinDate;
	// }
	// console.log(range);
	console.log(buttonState);

	async function submitBooking() {
		if (
			stayLength !== undefined &&
			name !== undefined &&
			email !== undefined &&
			mobile !== undefined
		) {
			const reqObj = {
				Name: name,
				Email: email,
				Mobile: mobile,
				StayLength: stayLength,
				stayCost: calculateStay().toString(),
			};
			try {
				const postRequest = await fetch("/Api/SubmitForm", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(reqObj),
				});
				const response = await postRequest.json();
				console.log(postRequest);
			} catch (error) {
				console.log(error);
			}
		}
	}

	const calculateStay = () => {
		let cost = parseInt(data?.Price || "0") * parseInt(stayLength || "0");

		return cost;
	};

	return (
		<Box>
			<FormControl isRequired className="formpage">
				<Heading>Enquiries Form</Heading>
				{images !== undefined && images.length > 0 ? (
					<Carousel images={images}></Carousel>
				) : null}
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
									console.log(e);
									setRange(e);
								}}
								disabled={{ before: new Date() }}
							/>
						</Box>
						<Box className="bookingInfo">
							<Box>
								{stayLength !== undefined && stayLength !== "0 days"
									? `Your stay will be ${stayLength}!`
									: "Please select stay duration"}
							</Box>
							<Box>
								{`£${data?.Price} per night`}
								<Box>
									{`Cost of your stay: £${stayLength ? calculateStay() : ""}
									`}
								</Box>
							</Box>
							<Box>{`Check-in: ${
								range !== undefined ? range?.from?.getDate() : ""
							}  ${range !== undefined ? range?.from?.getUTCMonth() : ""} ${
								range !== undefined ? range?.from?.getFullYear() : ""
							}`}</Box>
							<Box>{`Check-out: ${
								range?.to !== undefined ? range?.to?.getDate() : ""
							} ${range?.to !== undefined ? range?.to?.getUTCMonth() : ""} ${
								range?.to !== undefined ? range?.to?.getFullYear() : ""
							}`}</Box>
						</Box>

						<Box
							p={4}
							alignItems={"center"}
							display={"flex"}
							flexDirection={"column"}
						>
							<Input
								placeholder="Full Name"
								size="md"
								type="text"
								m={1}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>

							<Input
								placeholder="Email"
								size="md"
								type="email"
								m={1}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>

							<Input
								placeholder="Mobile"
								size="md"
								type="number"
								m={1}
								onChange={(e) => {
									setMobile(e.target.value);
								}}
							/>
							<ButtonGroup isDisabled={buttonState}>
								<Button
									bg="rgb(135, 78, 50)"
									color={"white"}
									variant="solid"
									size="md"
									width="20"
									_hover={{ bg: " rgba(135, 78, 50, 0.813)" }}
									type="submit"
									onClick={() => {
										submitBooking(),
											submitToast({
												title: "Enquiry Submitted",
												description: "Your enquiry was submitted",
												duration: 5000,
												isClosable: true,
											});
									}}
								>
									Submit
								</Button>
							</ButtonGroup>
						</Box>
					</Stack>
				</div>
			</FormControl>
		</Box>
	);
}
