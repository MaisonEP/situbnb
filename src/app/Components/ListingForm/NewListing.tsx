"use client";
import {
	Card,
	CardBody,
	Stack,
	Heading,
	Divider,
	CardFooter,
	ButtonGroup,
	Image,
	Text,
	Button,
	Box,
	Input,
	Textarea,
} from "@chakra-ui/react";
import "./NewListing.css";
import { ChangeEvent, useEffect, useState } from "react";

export default function ListingForm() {
	const [location, setLocation] = useState<string>();
	const [price, setPrice] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [mobile, setMobile] = useState<string>("");
	const [moreInfo, setMoreInfo] = useState<string>("");
	const [beds, setBeds] = useState<string>("");
	const [images, setImages] = useState<string[]>([]);

	useEffect(() => {
		function handleOnChange(e: React.FormEvent<HTMLFormElement>) {
			const target = e.target as HTMLInputElement & {
				files: FileList;
			};

			// console.log(target.files[0].name);
			setImages([...images, target.files[0].name]);
		}
	}, [images]);

	async function HandleSubmit() {
		if (
			location !== "" &&
			price !== "" &&
			email !== "" &&
			mobile !== "" &&
			beds !== ""
		) {
			const reqObj = {
				Location: location,
				Price: price,
				Beds: beds,
				MoreInfo: moreInfo,
				Images: images,
			};
			const request = await fetch("/Api/PostBnBData", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(reqObj),
			});
		} else {
			console.log("image", images);
		}
	}

	return (
		<Box className="listCardContainer">
			<Card maxW="sm" className="listingCard">
				<CardBody className="cardBody">
					<Box className="imagePickerBox">
						<Input
							type="file"
							onChange={(e) => {
								handleOnChange(e);
							}}
						></Input>
					</Box>
					<Stack mt="6" spacing="3" className="stack">
						<Heading size="md">Enter B&B details!</Heading>
						<Input
							placeholder="Location"
							onChange={(e) => {
								setLocation(e.target.value);
							}}
						/>
						<Input
							placeholder="Price"
							onChange={(e) => {
								setPrice(e.target.value);
							}}
						/>
						<Input
							type="email"
							placeholder="Contact Email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Input
							placeholder="Contact Number"
							onChange={(e) => {
								setMobile(e.target.value);
							}}
						/>
						<Input
							placeholder="Number of Beds"
							onChange={(e) => {
								setBeds(e.target.value);
							}}
						/>
						<Textarea
							placeholder="Add adiitonal information about this accomodation here"
							onChange={(e) => {
								setMoreInfo(e.target.value);
							}}
						/>
					</Stack>
				</CardBody>

				<CardFooter>
					<ButtonGroup spacing="2">
						<Button variant="solid" colorScheme="green" onClick={HandleSubmit}>
							List property
						</Button>
					</ButtonGroup>
				</CardFooter>
			</Card>
		</Box>
	);
}
