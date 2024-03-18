import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
  const location = useLocation();
  const data = location.state?.data;
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
              maxW={{ base: "70%", sm: "150px" }}
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
              maxW={{ base: "80%", sm: "150px" }}
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
              maxW={{ base: "80%", sm: "150px" }}
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
              maxW={{ base: "70%", sm: "150px" }}
              src={LearnerPupil}
              alt="Pupils"
            />

            <Stack>
              <CardBody>
                <Heading size="md">PUPILS</Heading>

                <Text py="1">
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
              maxW={{ base: "80%", sm: "150px" }}
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
              maxW={{ base: "80%", sm: "150px" }}
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
    </>
  );
}
