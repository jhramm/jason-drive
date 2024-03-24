import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function AllMessages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          "https://drivinginstructorsdiary.com/app/api/viewMessageApi",
          data
        )
        .then((res) => {
          console.log(res.data.data.data);
          setMessages(res.data.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }, []);

  const openModal = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMessage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="overlay overlay-black overlay-80 pt-90 pb-60">
      <Flex justifyContent={"center"}>
        <TableContainer maxWidth={"100%"} mt={10} pb={5}>
          <Table variant="simple" size={"lg"} color={"white"}>
            <TableCaption color={"white"}>All System Messages</TableCaption>
            <Thead>
              <Tr>
                <Th color={"white"} fontSize={20}>
                  Recievers Name
                </Th>
                <Th color={"white"} fontSize={20}>
                  Senders Name
                </Th>
                <Th color={"white"} fontSize={20}>
                  Date/Time
                </Th>
                <Th color={"white"} fontSize={20}>
                  Status
                </Th>
                <Th color={"white"} fontSize={20}>
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {messages.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <div
                      onClick={() => openModal(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <h5>{item.receiver_name}</h5>
                    </div>
                  </Td>
                  <Td>
                    <h5>{item.sender_name}</h5>
                  </Td>
                  <Td>
                    <h5>{item.created_at}</h5>
                  </Td>
                  <Td>
                    <h5>{item.subject}</h5>
                  </Td>
                  <Td>
                    <Flex justifyContent={"center"}>
                      <DeleteIcon boxSize={6} />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent bg={"#252830"}color={"white"}>
          <ModalBody pb={10} pt={10}>
            <Flex pb={10}>
              <Heading color={"white"}>Your Message</Heading>
            </Flex>

            {selectedMessage && (
              <div
                dangerouslySetInnerHTML={{ __html: selectedMessage.message }}
              />
            )}
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </div>
  );
}
