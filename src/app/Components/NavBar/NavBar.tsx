"use client";

import "./NavBar.css";
import { ReactNode } from "react";
import NextLink from "next/link";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	Image,
	Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("grey", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);

export default function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box id="taskBar" bg={useColorModeValue("gray.100", "gray.900")} px={4}>
			<Flex alignItems={"center"} justifyContent={"space-between"}>
				<IconButton
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
				/>
				<HStack spacing={8} alignItems={"center"}>
					<Box>
						<Image boxSize={"100px"} src="/DoeLogo.png"></Image>
					</Box>
				</HStack>
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							as={Button}
							rounded={"full"}
							variant={"link"}
							cursor={"pointer"}
							minW={0}
						>
							<Box>
								<Text>Admin</Text>
							</Box>
						</MenuButton>
						<MenuList>
							<Link as={NextLink} href="/Admin">
								<MenuItem>Admin</MenuItem>
							</Link>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
		</Box>
	);
}
