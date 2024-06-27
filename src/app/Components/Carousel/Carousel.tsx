import { Box, Button, Img } from "@chakra-ui/react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AccomodationAvatarProps } from "../Accomodation/AccomodationAvatar";
import { useState } from "react";

interface CarouselProps {
	images: string[];
}

export default function Carousel(props: CarouselProps) {
	const [slide, setSlide] = useState<number>(0);

	function nextSlide() {
		setSlide(slide === props.images.length - 1 ? 0 : slide + 1);
	}
	function prevSlide() {
		setSlide(slide === 0 ? props.images.length - 1 : slide - 1);
	}

	return (
		<Box className="carousel">
			<BsArrowRightCircleFill
				className="arrow arrow-right"
				onClick={nextSlide}
			/>
			{props.images.map((item, indx) => {
				// console.log(item);
				return (
					<Img
						key={indx}
						src={item}
						className={slide === indx ? "slide" : "slide-hidden"}
					></Img>
				);
			})}
			<BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
			<span className="indicators">
				{props.images.map((_, idx) => {
					return (
						<button
							key={idx}
							onClick={() => {
								setSlide(idx);
							}}
							className={slide === idx ? "indicator" : "indicator-inactive"}
						></button>
					);
				})}
			</span>
		</Box>
	);
}
