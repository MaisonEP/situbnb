"use client";

import { AvatarGroup, Box } from "@chakra-ui/react";
import { AccomodationAvatar } from "../Accomodation/AccomodationAvatar";
import "./BnBCard.css";
import React from "react";
import { useEffect, useState } from "react";
import { BnbDataResponse } from "../../Api/BnB/route";

export function Card() {
	const [bnbData, setBnbData] = useState<BnbDataResponse[]>();

	useEffect(() => {
		async function getBnbData() {
			const response = await fetch("Api/BnB/", {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			const jsonData = await response.json();

			setBnbData(jsonData);
		}
		getBnbData();
	}, []);
	console.log(bnbData);

	return (
		<Box>
			<div className="Ocean">
				{bnbData?.map((e) => {
					return <AccomodationAvatar bnbData={e}></AccomodationAvatar>;
				})}
			</div>
		</Box>
	);
}
