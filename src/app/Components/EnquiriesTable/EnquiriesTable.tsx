import { UserResponse } from "@/app/Api/Users/route";
import {
	Box,
	Heading,
	Input,
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
import { px } from "framer-motion";
import { useEffect, useState } from "react";

export function EnquiriesTable() {
	const [data, setData] = useState<UserResponse[] | undefined>();
	const [filteredSearch, setFilteredSearch] = useState<string>("");

	useEffect(() => {
		async function getEnquiries() {
			const getEnquiries = await fetch("/Api/Users", {
				headers: { Accept: "application/json", method: "GET" },
			});

			const readEnquiries: UserResponse[] = await getEnquiries.json();
			setData(readEnquiries);
		}

		async function filterEnquiries() {
			const getEnquiries = await fetch("/Api/Users/" + filteredSearch, {
				headers: { Accept: "application/json", method: "GET" },
			});
			const readEnquiries: UserResponse[] = await getEnquiries.json();
			setData(readEnquiries);
			console.log(data);
		}

		if (filteredSearch === "") {
			getEnquiries();
		} else {
			filterEnquiries();
		}
	}, [filteredSearch]);
	// data?.map((e) => {
	// 	console.log(e.Name);
	// });

	return (
		<Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
			<Heading display={"flex"} justifyContent={"center"} marginTop={10}>
				Enquiries made by clients!
			</Heading>
			<Input
				placeholder="Filter Enquiries"
				w={"50%"}
				marginTop={"30px"}
				onChange={(e) => {
					setFilteredSearch(e.target.value);
				}}
			/>
			<TableContainer
				m={"60px"}
				className="Hi"
				border={"solid"}
				borderWidth={0.1}
			>
				<Table variant="simple">
					<TableCaption>Enquiries made by clients!</TableCaption>
					<Thead>
						<Tr>
							<Th>
								Client <br /> Name
							</Th>
							<Th>Email</Th>
							<Th>
								Contact <br />
								Number
							</Th>
							<Th>
								Stay <br />
								Duration (Days)
							</Th>
							<Th> Revenue</Th>
						</Tr>
					</Thead>
					<Tbody>
						{data?.map((e) => {
							return (
								<tr>
									<Td>{e.Name}</Td>
									<Td>{e.Email}</Td>
									<Td>{e.Mobile}</Td>
									<Td>{e.StayLength}</Td>
									<Td>{"£" + e.Revenue}</Td>
								</tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
}
