import { UserResponse } from "@/app/Api/Users/route";
import {
	Box,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function EnquiriesTable() {
	// stay: stayLength,
	// name: name,
	// email: email,
	// number

	const [data, setData] = useState<UserResponse[] | undefined>();
	useEffect(() => {
		async function getEnquiries() {
			const getEnquiries = await fetch("/Api/Users", {
				headers: { Accept: "application/json", method: "GET" },
			});

			const readEnquiries: UserResponse[] = await getEnquiries.json();
			setData(readEnquiries);
		}
		getEnquiries();
	}, []);
	// data?.map((e) => {
	// 	console.log(e.Name);
	// });

	return (
		<TableContainer m={"60px"} className="Hi" border={"solid"}>
			<Table variant="simple">
				<TableCaption>Enquiries made by clients!</TableCaption>
				<Thead>
					<Tr>
						<Th>Client Name</Th>
						<Th>Email</Th>
						<Th> Contact Number</Th>
						<Th> Stay Duration</Th>
						<Th> Revenue</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						{data?.map((e) => {
							return <tr>{e.Name}</tr>;
						})}
						{/* {data?.map((data) => {
							console.log("this is data  " + data);
							return <p></p>;
						})} */}
						<Td>Erl</Td>
						<Td>Erl@email.com</Td>
						<Td>0781385500</Td>
						<Td>6 days</Td>
						<Td>£200</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
}
