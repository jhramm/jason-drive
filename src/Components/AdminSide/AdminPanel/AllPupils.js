import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";

export default function AllPupils() {
  let [pupil, setPupil] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const instructorId = localStorage.getItem("instructor_id");

      if (!instructorId) {
        console.error("Instructor not found in localStorage");
        return;
      }

      const data = { instructor_id: instructorId };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch(
          "https://drivinginstructorsdiary.com/app/api/viewPupilApi/active",
          requestOptions
        );
        const resonseData = await response.json();
        setPupil(resonseData);
      } catch (err) {
        console.error("Error fetching Pupil", err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="overlay overlay-black overlay-80 text-center">
        <h1 className="tableBtn ">Pupil List</h1>
        <Flex justifyContent="center" mt={30}>
          <Box>
            <Button marginRight={5} bg={"green"}>
              Active
            </Button>
            <Button bg={"orange"}>Inactive</Button>
          </Box>
        </Flex>

        <Flex justifyContent="center">
          <TableContainer maxWidth={"100%"} mt={10}>
            <Table variant="simple" size={"lg"}>
              <TableCaption>Active and Inactive Pupils</TableCaption>
              <Thead>
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Email</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                  <Td isNumeric>25.4</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                  <Td isNumeric>30.48</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                  <Td isNumeric>0.91444</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Flex>
        {pupil.map((item) => {
          return <h1 key={item.id}>{item.first_name}</h1>;
        })}
      </div>
    </>
  );
}
