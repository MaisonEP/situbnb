import { Box, Button, Img } from "@chakra-ui/react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AccomodationAvatarProps } from "../Accomodation/AccomodationAvatar";

interface CarouselProps {
  images: string[];
}

export default function Carousel(props: CarouselProps) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
        height: "400px",
      }}
    >
      <BsArrowLeftCircleFill />
      {props.images.map((item, indx) => {
        console.log(item);
        return (
          <Img
            key={indx}
            src={item}
            style={{
              borderRadius: "0.5rem",
              boxShadow: "0px 0px 7px black",
              width: "100%",
              height: "100%",
            }}
          ></Img>
        );
      })}
      <BsArrowRightCircleFill />
      <span>
        {props.images.map((_, idx) => {
          return <Button key={idx} onClick={undefined}></Button>;
        })}
      </span>
    </Box>
  );
}
