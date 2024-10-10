"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import ColorModeToggle from "./common/ColorModeToggle";

type NavbarProps = {
	isSignedIn: boolean;
	userName: string;
	jobTitle: string;
};
const Navbar = ({ isSignedIn, userName, jobTitle }: NavbarProps) => {
	return (
		<Box as="nav" color="text" boxShadow="md">
			<Container maxW="container.xl" py={4}>
				<Flex justify="space-between" align="center">
					<Link href="/" passHref>
						<Button variant="ghost">Home</Button>
					</Link>
					<ColorModeToggle />
					<Text>{userName}</Text>
					<Text>{jobTitle}</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
