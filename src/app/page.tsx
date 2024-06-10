import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";
import { Card } from "./BnBCard/BnBCard";

export default function Home() {
	return (
		<ChakraProvider>
			<NavBar></NavBar>
			<Card></Card>
		</ChakraProvider>
	);
}
