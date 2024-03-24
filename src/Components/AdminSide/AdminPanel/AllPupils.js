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
  Box,
  Badge,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import PupilModal from "./PupilModal";

export default function AllPupils() {
  let [pupil, setPupil] = useState([]);
  let [isActive, setIsActive] = useState("active");
  let [loading, setLoading] = useState(true);

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
          `https://drivinginstructorsdiary.com/app/api/viewPupilApi/${isActive}`,
          data
        )
        .then((res) => {
          console.log(res.data.data.data);
          setPupil(res.data.data.data);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();
  }, [isActive, loading]);

  const [isOpen, setIsOpen] = useState(false);
  const [pupilId, setPupilId] = useState(0);

  const openModal = (id) => {
    setPupilId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="overlay overlay-black overlay-80 text-center">
        <h1 className="tableBtn ">Pupil List</h1>
        <Flex justifyContent="center" mt={30}>
          <Box>
            <Button
              marginRight={5}
              bg={"green"}
              onClick={() => setIsActive("active")}
            >
              Active
            </Button>
            <Button bg={"orange"} onClick={() => setIsActive("inactive")}>
              Inactive
            </Button>
          </Box>
        </Flex>

        <Flex justifyContent="center">
          <TableContainer maxWidth={"100%"} mt={10} pb={5}>
            <Table variant="simple" size={"lg"} color={"white"}>
              <TableCaption color={"white"}>
                Active and Inactive Pupils
              </TableCaption>
              <Thead>
                <Tr>
                  <Th color={"white"}>First Name</Th>
                  <Th color={"white"}>Last Name</Th>
                  <Th color={"white"}>Email</Th>
                  <Th color={"white"}>Status</Th>
                  <Th color={"white"}>Actions</Th>
                </Tr>
              </Thead>
              {loading === false ? (
                <>
                  <Tbody>
                    {pupil.map((item) => {
                      return (
                        <Tr key={item.id}>
                          <Td>{item.first_name}</Td>
                          <Td>{item.last_name}</Td>
                          <Td>{item.email}</Td>
                          <Td>
                            {isActive === "active" ? (
                              <>
                                <Badge bg="green">Active</Badge>
                              </>
                            ) : (
                              <>
                                <Badge bg="red">Inactive</Badge>
                              </>
                            )}
                          </Td>
                          <Td>
                            <Flex gap={5} justifyContent={"center"}>
                              <EditIcon
                                onClick={() => openModal(item.id)}
                                cursor={"pointer"}
                              />
                              <DeleteIcon cursor={"pointer"} />
                            </Flex>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </>
              ) : (
                <>
                  <Spinner color="white" size={"xl"} />
                </>
              )}
            </Table>
          </TableContainer>
        </Flex>
      </div>
      <div>
        <PupilModal isOpen={isOpen} onClose={closeModal} pupilId={pupilId}>
          <Flex pt={10}>
            <Button onClick={closeModal} mr={5}>
              Close
            </Button>
          </Flex>
        </PupilModal>
      </div>
    </>
  );
}
