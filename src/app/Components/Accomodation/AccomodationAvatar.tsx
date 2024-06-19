"use client";

import { Avatar, AvatarGroup, Box } from "@chakra-ui/react";
import "./AccomodationAvatar.css";
import { Link } from "@chakra-ui/react";
import { BnbDataResponse } from "@/app/Api/BnB/route";

interface AccomodationAvatarProps {
	bnbData: BnbDataResponse;
}

export function AccomodationAvatar({ bnbData }: AccomodationAvatarProps) {
	return (
		<Link href="/BookingForm">
			<div className="displayContainer">
				<img className="image" src={bnbData.Images[0]}></img>
				<p className="label">Location: {bnbData.Location}</p>
			</div>
		</Link>
	);
}
