import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export default function Bookings() {
  let [booking, setBooking] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const instructorId = localStorage.getItem("instructor_id");

      if (!instructorId) {
        console.error("Instructor not found in localStorage");
        return;
      }

      const data = { instructor_id: instructorId };
      axios
        .post(
          "https://drivinginstructorsdiary.com/app/api/viewBookingApi",
          data
        )
        .then((res) => {
          console.log(res.data.bookings);
          setBooking(res.data.bookings);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }, []);

  return (
    <div className="overlay overlay-black overlay-80 pt-90 pb-60">
      <Flex justifyContent={"center"}>
        <TableContainer maxWidth={"100%"} mt={10} p={10} >
          <Table variant="simple" size={"lg"} color={"white"}>
            <TableCaption color={"white"}>All Bookings</TableCaption>
            <Thead>
              <Tr>
                <Th color={"white"}>Type</Th>
                <Th color={"white"}>Pupil</Th>
                <Th color={"white"}>Reason</Th>
                <Th color={"white"}>Start Time</Th>
                <Th color={"white"}>End Time</Th>
                <Th color={"white"}>Duration</Th>
                <Th color={"white"}>Status</Th>
                <Th color={"white"}>Actions</Th>
              </Tr>
            </Thead>

            <Tbody>
              {booking.map((item) => {
                return (
                  <Tr>
                    <Td>{item.type}</Td>
                    <Td>{item.pupil_text}</Td>
                    <Td>{item.reason}</Td>
                    <Td>{item.start_datetime}</Td>
                    <Td>{item.end_datetime}</Td>
                    <Td>{item.duration} H</Td>
                    <Td>{item.status}</Td>
                    <Td>
                      <Flex justifyContent={"center"} gap={5}>
                        <EditIcon />
                        <DeleteIcon />
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </div>
  );
}
