import React from "react";
import { Link} from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./adminStyles.css";
import Calendar from "../../../img/calendar.jpg";
import Bookings from "../../../img/bookings.jpg";
import Messages from "../../../img/messages.jpg";
import LearnerPupil from "../../../img/learner-pupil.jpeg";
import WeekIncome from "../../../img/week-income.jpg";
import TotalIncome from "../../../img/total-income.jpg";

export default function AdminPanel() {
  const data = JSON.parse(localStorage.getItem('getAll'));
  return (
    <>
      <div className="instruct-id overlay overlay-black overlay-80">
        <h1>My login id: {data.id}</h1>
        <p>
          First Name: <span>{data.first_name}</span>
        </p>
        <p>
          Last Name: <span>{data.last_name}</span>
        </p>
        <p>
          Last Logged in : <span>{data.last_login}</span>
        </p>
      </div>

      <div className="panel-container overlay overlay-black overlay-80">
        <div className="panel-item">
          <Card
            direction={{ base: "column", sm: "row" }}
            bg="#4c4c4c"
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "150px" }}
              src={Calendar}
              alt="Calendar"
            />

            <Stack>
              <CardBody>
                <Heading size="md">CALENDAR</Heading>

                <Text py="1">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Link to="/calendar">
                  <Button variant="solid" colorScheme="yellow">
                    View Calendar
                  </Button>
                </Link>
              </CardFooter>
            </Stack>
          </Card>
        </div>
        <div className="panel-item">
          <Card
            direction={{ base: "column", sm: "row" }}
            bg="#4c4c4c"
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "150px" }}
              src={Bookings}
              alt="Bookings"
            />

            <Stack>
              <CardBody>
                <Heading size="md">BOOKINGS</Heading>

                <Text py="1">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="yellow">
                  All Bookings
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </div>
        <div className="panel-item">
          <Card
            direction={{ base: "column", sm: "row" }}
            bg="#4c4c4c"
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "150px" }}
              src={Messages}
              alt="Messages"
            />

            <Stack>
              <CardBody>
                <Heading size="md">MESSAGES</Heading>

                <Text py="1">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="yellow">
                  View all Messages
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </div>
      </div>
      <div className="panel-container overlay overlay-black overlay-80 pb-60">
        <div className="panel-item">
          <Card
            direction={{ base: "column", sm: "row" }}
            bg="#4c4c4c"
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "150px" }}
              src={LearnerPupil}
              alt="Pupils"
            />

            <Stack>
              <CardBody>
                <Heading size="md">PUPILS</Heading>

                <Text py="1">
                  pupils: {data.total}
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="yellow">
                  View All Pupils
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </div>
        <div className="panel-item">
          <Card
            direction={{ base: "column", sm: "row" }}
            bg="#4c4c4c"
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "150px" }}
              src={WeekIncome}
              alt="Weekly Income"
            />

            <Stack>
              <CardBody>
                <Heading size="md">THIS WEEKS INCOME</Heading>

                <Text py="1">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="yellow">
                  Week Income
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </div>
        <div className="panel-item">
          <Card
            direction={{ base: "column", sm: "row" }}
            bg="#4c4c4c"
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "150px" }}
              src={TotalIncome}
              alt="Total Income"
            />

            <Stack>
              <CardBody>
                <Heading size="md">TOTAL INCOME</Heading>

                <Text py="1">
                  Caffè latte is a coffee beverage of Italian origin made with
                  espresso and steamed milk.
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="yellow">
                  Total Income
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </div>
      </div>

      <div className="instruct-id overlay overlay-black overlay-80">
        <Box>
          <Heading textAlign={'center'} pb={10}>ACCOUNT STATISTICS</Heading>
          <Flex
            justifyContent={"space-around"}
            flexWrap={"wrap"}
            gap={3}
            paddingBottom={10}
          >
            <Box
              flexDirection={"column"}
              p={10}
              pt={20}
              borderRadius={10}
              width={300}
              backgroundColor={"#4c4c4c"}
              border={"2px solid white"}
              textAlign={"center"}
            >
              <Heading fontSize={25} pb={5}>
                No. of Lessons
              </Heading>
              <CircularProgress
                value={data.has_lesson_created}
                size="120px"
                color="green.400"
              >
                <CircularProgressLabel fontSize={"15px"} color={"white"}>
                  {data.has_lesson_created} Lessons
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box
              flexDirection={"column"}
              p={10}
              pt={20}
              borderRadius={10}
              width={300}
              backgroundColor={"#4c4c4c"}
              border={"2px solid white"}
              textAlign={"center"}
            >
              <Heading fontSize={25} pb={5}>
                Instructor Priority
              </Heading>
              <CircularProgress
                value={data.instructor_priority}
                size="120px"
                color="green.400"
                max={3}
              >
                <CircularProgressLabel fontSize={"15px"} color={"white"}>
                  {data.instructor_priority}
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box
              flexDirection={"column"}
              p={10}
              pt={20}
              borderRadius={10}
              width={300}
              backgroundColor={"#4c4c4c"}
              border={"2px solid white"}
              textAlign={"center"}
            >
              <Heading fontSize={25} pb={5}>
                Waiting List
              </Heading>
              <CircularProgress
                value={data.waiting_list}
                size="120px"
                color="green.400"
              >
                <CircularProgressLabel fontSize={"15px"} color={"white"}>
                  {data.waiting_list} Pupils
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box
              flexDirection={"column"}
              p={10}
              pt={20}
              borderRadius={10}
              width={300}
              backgroundColor={"#4c4c4c"}
              border={"2px solid white"}
              textAlign={"center"}
            >
              <Heading fontSize={25} pb={5}>
                Pupil Caution
              </Heading>
              <CircularProgress
                value={data.pupil_caution}
                size="120px"
                color="green.400"
              >
                <CircularProgressLabel fontSize={"15px"} color={"white"}>
                  {data.pupil_caution} Pupils
                </CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Flex>
        </Box>
      </div>
    </>
  );
}
