import { AvatarGroup } from "@chakra-ui/react";
import { AccomodationAvatar } from "../Accomodation/AccomodationAvatar";
import "./BnBCard.css";
import React from "react";

export function Card() {
	return (
		<div className="Ocean">
			<AccomodationAvatar></AccomodationAvatar>
			<AccomodationAvatar></AccomodationAvatar>
			<AccomodationAvatar></AccomodationAvatar>
			<AccomodationAvatar></AccomodationAvatar>
		</div>
	);
}
