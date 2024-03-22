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
  Button,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import TransactionModal from "./TransactionModal";

export default function TransactionList() {
  let [summary, setSummary] = useState([]);
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
          "https://drivinginstructorsdiary.com/app/api/viewTransactionApi",
          data
        )
        .then((res) => {
          console.log(res.data.data.data);
          setSummary(res.data.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="overlay overlay-black overlay-80 pt-90 pb-60">
      <Button
        ml={20}
        background={"#dec839"}
        fontWeight={"bold"}
        onClick={openModal}
      >
        ADD TRANSACTION
      </Button>
      <Flex justifyContent={"center"}>
        <TableContainer maxWidth={"100%"} mt={10} pb={5}>
          <Table variant="simple" size={"lg"} color={"white"}>
            <TableCaption color={"white"}>
              List of transaction paid and received
            </TableCaption>
            <Thead>
              <Tr>
                <Th color={"white"}>Date</Th>
                <Th color={"white"}>Type</Th>
                <Th color={"white"}>Payment Method</Th>
                <Th color={"white"}>Paid / Received</Th>
                <Th color={"white"}>Amount</Th>
                <Th color={"white"}>Lesson Hrs.</Th>
                <Th color={"white"}>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {summary.map((item, index) => {
                return (
                  <Tr>
                    <Td>{item.date}</Td>
                    <Td>{item.type}</Td>
                    <Td>{item.payment_method}</Td>
                    <Td>{item.status}</Td>
                    <Td>£{item.amount}</Td>
                    <Td>{item.hours}</Td>
                    <Td>
                      <Flex gap={5} justifyContent={"center"}>
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
      <div>
        <TransactionModal isOpen={isOpen} onClose={closeModal}>
          <Flex justifyContent={"right"} fontSize={20}>
            <button onClick={closeModal}>X</button>
          </Flex>
          <Heading color={"white"}>Add a transaction</Heading>
          <p>This is the content of the modal.</p>
          <Button onClick={closeModal} mr={5}>
            Close
          </Button>
          <Button>Update</Button>
        </TransactionModal>
      </div>
    </div>
  );
}
