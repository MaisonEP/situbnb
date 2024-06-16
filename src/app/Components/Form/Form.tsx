"use client";

import "./Form.css";
import "react-day-picker/dist/style.css";
import { FormControl, Input, Stack, Button, Box } from "@chakra-ui/react";
import { addDays, formatDistance } from "date-fns";

import { useEffect, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { distance } from "framer-motion";

export function BnBForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [stayLength, setStayLength] = useState<string | undefined>();

  const initialRange: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
  };

  const [range, setRange] = useState<DateRange | undefined>(initialRange);

  const date = new Date();

  useEffect(() => {
    function distance() {
      if (range?.from !== undefined && range?.to !== undefined) {
        const rangeDistance = formatDistance(range?.from, range?.to);
        return rangeDistance;
      }
    }
    const stay = distance();
    setStayLength(stay);
  }, [range]);
  console.log(stayLength);

  return (
    <FormControl isRequired>
      <div className="Ocean">
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
              {stayLength !== undefined
                ? `Your stay will be ${stayLength}!`
                : "Please select stay duration"}
            </Box>
            <Box
              p={4}
              alignItems={"center"}
              display={"flex"}
              flexDirection={"column"}
            >
              <Input placeholder="Full Name" size="md" type="text" m={1} />

              <Input placeholder="Email" size="md" type="email" m={1} />

              <Input placeholder="Mobile" size="md" type="number" m={1} />

              <Button
                bg="rgb(135, 78, 50)"
                color={"white"}
                variant="solid"
                size="md"
                width="20"
                _hover={{ bg: " rgba(135, 78, 50, 0.813)" }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </div>
      </div>
    </FormControl>
  );
}
