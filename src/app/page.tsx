import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";

export default function Home() {
	return (
		<ChakraProvider>
			<NavBar></NavBar>
		</ChakraProvider>
	);
}
