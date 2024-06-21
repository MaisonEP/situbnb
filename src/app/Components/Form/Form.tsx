"use client";

import "./Form.css";
import "react-day-picker/dist/style.css";
import {
  FormControl,
  Input,
  Stack,
  Button,
  Box,
  StepNumber,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import { addDays, formatDistanceStrict } from "date-fns";

import { useEffect, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import Carousel from "../Carousel/Carousel";

export function BnBForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [stayLength, setStayLength] = useState<string | undefined>();
  const [buttonState, setButtonState] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const initialRange: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 1),
  };

  const [range, setRange] = useState<DateRange | undefined>(initialRange);

  const date = new Date();

  useEffect(() => {
    function distance() {
      if (range?.from !== undefined && range?.to !== undefined) {
        const rangeDistance = formatDistanceStrict(range?.from, range?.to, {
          unit: "day",
        });
        return rangeDistance;
      }
    }
    const stay = distance();
    setStayLength(stay);

    async function bnbImages() {
      const response = await fetch("/Api/BnB", {
        headers: { Accept: "application/json" },
        method: "GET",
      });

      const result = await response.json();

      console.log(result[0].Images);
      setImages(result[0].Images);
    }
    bnbImages();
  }, [range]);

  async function submitBooking() {
    if (
      stayLength !== undefined &&
      name !== undefined &&
      email !== undefined &&
      mobile !== undefined
    ) {
      const reqObj = {
        Name: name,
        Email: email,
        Mobile: mobile,
        StayLength: stayLength,
      };
      const postRequest = await fetch("/Api/SubmitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reqObj),
      });
    }
  }

  return (
    <Box>
      {images !== undefined && images.length > 0 ? (
        <Carousel images={images}></Carousel>
      ) : null}
      <FormControl isRequired>
        {/* <div className="Ocean"> */}
        <Heading>Enquiries Form</Heading>
        <div className="island">
          <Stack className="stackContainer" spacing={2}>
            <Box
              bg="#f5b593"
              borderRadius="32px"
              // w="100%"
              p={4}
              color="white"
              display={"flex"}
              justifyContent={"center"}
            >
              <DayPicker
                className="dateSelector"
                style={{ margin: 0 }}
                mode="range"
                selected={range}
                onSelect={(e) => {
                  setRange(e);
                  //   console.log(distance());
                }}
                disabled={{ before: new Date() }}
              />
            </Box>
            <Box>
              {stayLength !== undefined && stayLength !== "0 days"
                ? `Your stay will be ${stayLength}!`
                : "Please select stay duration"}
            </Box>
            <Box
              p={4}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Input
                placeholder="Full Name"
                size="md"
                type="text"
                m={1}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <Input
                placeholder="Email"
                size="md"
                type="email"
                m={1}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Input
                placeholder="Mobile"
                size="md"
                type="number"
                m={1}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
              <ButtonGroup isDisabled={buttonState}>
                {/* {stayLength !== undefined &&
								name !== undefined &&
								email !== undefined &&
								mobile !== undefined
									? setButtonState(false)
									: setButtonState(true)} */}

                <Button
                  bg="rgb(135, 78, 50)"
                  color={"white"}
                  variant="solid"
                  size="md"
                  width="20"
                  _hover={{ bg: " rgba(135, 78, 50, 0.813)" }}
                  type="submit"
                  onClick={submitBooking}
                >
                  Submit
                </Button>
              </ButtonGroup>
            </Box>
          </Stack>
        </div>
        {/* </div> */}
      </FormControl>
    </Box>
  );
}
