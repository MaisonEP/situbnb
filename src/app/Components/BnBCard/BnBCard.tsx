"use client";

import { AvatarGroup, Box } from "@chakra-ui/react";
import { AccomodationAvatar } from "../Accomodation/AccomodationAvatar";
import "./BnBCard.css";
import React from "react";
import { useEffect, useState } from "react";
import { BnbDataResponse } from "../../Api/GetBnBData/route";

export function Card() {
	const [bnbData, setBnbData] = useState<BnbDataResponse[]>();

	useEffect(() => {
		async function getBnbData() {
			const response = await fetch("Api/GetBnBData/", {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			const jsonData = await response.json();

			setBnbData(jsonData);
		}
		getBnbData();
	}, []);
	//   console.log(
	//     bnbData?.map((e) => {
	//       console.log(e.Images);
	//     })
	//   );

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
