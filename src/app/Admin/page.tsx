"use client";
import { Box } from "@chakra-ui/react";
import { EnquiriesTable } from "../Components/EnquiriesTable/EnquiriesTable";
// import "./Admin.css";

export default function AdminPage() {
	return (
		<Box>
			<Box height={"auto"}>
				<EnquiriesTable></EnquiriesTable>
			</Box>
			<Box></Box>
		</Box>
	);
}
