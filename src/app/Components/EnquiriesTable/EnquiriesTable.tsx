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
  );
}
