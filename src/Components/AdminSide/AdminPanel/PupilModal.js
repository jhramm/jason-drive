import { Box, Button, Flex, FormLabel, Heading, Input} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";

export default function PupilModal({ isOpen, onClose, pupilId, children }) {

   const [pupil, setPupil] = useState({});
   const titleRef = useRef();
   const usernameRef = useRef();
   const emailRef = useRef();
   const firstNameRef = useRef();
   const lastNameRef = useRef();
   const houseNoRef = useRef();
   const addressRef = useRef();
   const homePostcodeRef = useRef();
   const pickUpAddressRef = useRef();
   const pickUpPostcodeRef = useRef();
   const productRef = useRef();
   const usualAvailabilityRef = useRef();
   const lessonTypeRef = useRef();

    useEffect(() => {
        const getInfo = () => {
          const payload = {
            instructor_id: localStorage.getItem("instructor_id"),
          };
          axios
            .post(
              `https://drivinginstructorsdiary.com/app/api/pupilDetailApi/${pupilId}`,
              payload
            )
            .then((res) => {
              setPupil(res.data.data)
              console.log(res);
              titleRef.current.value = res.data.data.title;
              usernameRef.current.value = res.data.data.username;
              emailRef.current.value = res.data.data.email;
              homePostcodeRef.current.value = res.data.data.postcode;
              firstNameRef.current.value = res.data.data.first_name;
              lastNameRef.current.value = res.data.data.last_name;
              houseNoRef.current.value = res.data.data.house_no;
              addressRef.current.value = res.data.data.address;
              pickUpAddressRef.current.value = res.data.data.pick_up_address;
              pickUpPostcodeRef.current.value = res.data.data.pick_up_postcode;
              productRef.current.value = res.data.data.product;
              usualAvailabilityRef.current.value = res.data.data.usual_availability;
              lessonTypeRef.current.value = res.data.data.lessonType;
            })
            .catch((e) => {
              console.log(e);
            });
        };
        getInfo();
    }, [pupilId]);

    const editPupil = () => {
        const payload = {
          title: titleRef.current.value,
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          username: usernameRef.current.value,
          email: emailRef.current.value,
          houseNo: houseNoRef.current.value,
          home_address: addressRef.current.value,
          home_postcode: homePostcodeRef.current.value,
          pick_up_address: pickUpAddressRef.current.value,
          pick_up_postcode: pickUpPostcodeRef.current.value,
          product_id: productRef.current.value,
          usual_availability: usualAvailabilityRef.current.value,
          lessonType_id: lessonTypeRef.current.value,
          instructor_id: localStorage.getItem("instructor_id")
        };
        axios
          .post(
            `https://drivinginstructorsdiary.com/app/api/updatePupilApi/${pupilId}`,
            payload
          )
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });

    }

 return (
   <Modal
     isOpen={isOpen}
     onRequestClose={onClose}
     style={{
       overlay: {
         backgroundColor: "rgba(0, 0, 0, 0.5)",
         zIndex: 1000,
       },
       content: {
         width: "50%",
         margin: "auto",
         border: "none",
         background: "#4c4c4c",
         color: "white",
         borderRadius: "8px",
         padding: "20px",
         zIndex: 1001,
       },
     }}
   >
     <Heading color={"white"} pb={5}>Edit Pupil Details</Heading>
     <Flex flexDirection={"column"} gap={10}>
       <Flex gap={5}>
         <Box flex={1}>
           <FormLabel>Title</FormLabel>
           <Input type="string" name="title" ref={titleRef} />
         </Box>
         <Box flex={1}>
           <FormLabel>Username</FormLabel>
           <Input type="string" name="username" ref={usernameRef} />
         </Box>
       </Flex>
       <Flex gap={5}>
         <Box flex={1}>
           <FormLabel>First Name</FormLabel>
           <Input type="string" name="firstName" ref={firstNameRef} />
         </Box>
         <Box flex={1}>
           <FormLabel>Last Name</FormLabel>
           <Input type="string" name="lastName" ref={lastNameRef} />
         </Box>
       </Flex>
       <Flex gap={5}>
         <Box flex={1}>
           <FormLabel>House Number</FormLabel>
           <Input type="string" name="houseNo" ref={houseNoRef} />
         </Box>
         <Box flex={1}>
           <FormLabel>Home Address</FormLabel>
           <Input type="string" name="address" ref={addressRef} />
         </Box>
       </Flex>
       <Flex gap={5}>
         <Box flex={1}>
           <FormLabel>Home Postcode</FormLabel>
           <Input type="string" name="postcode" ref={homePostcodeRef} />
         </Box>
         <Box flex={1}>
           <FormLabel>Email</FormLabel>
           <Input type="string" name="email" ref={emailRef} />
         </Box>
       </Flex>
       <Flex gap={5}>
         <Box flex={1}>
           <FormLabel>Pickup Address</FormLabel>
           <Input type="string" name="pickup_address" ref={pickUpAddressRef} />
         </Box>
         <Box flex={1}>
           <FormLabel>Pickup Postcode</FormLabel>
           <Input type="string" name="pickup_postcode" ref={pickUpPostcodeRef} />
         </Box>
       </Flex>
       <Flex gap={5}>
         <Box flex={1}>
           <FormLabel>Product</FormLabel>
           <Input type="string" name="product" ref={productRef} />
         </Box>
         <Box flex={1}>
           <FormLabel>Availability</FormLabel>
           <Input type="string" name="pickup_postcode" ref={usualAvailabilityRef} />
         </Box>
       </Flex>
       <Flex gap={5}>
         <Box flex={1}>
           <FormLabel>Lesson Type</FormLabel>
           <Input type="string" name="lessonType" ref={lessonTypeRef} />
         </Box>
       </Flex>
       <Button onClick={editPupil}>Save Edit</Button>
     </Flex>
     {children}
   </Modal>
 );
};
