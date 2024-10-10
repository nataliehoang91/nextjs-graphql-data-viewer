"use client";

import { Box, Button, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";
import ColorModeToggle from "./common/ColorModeToggle";
const Navbar = () => {
	return (
		<Box as="nav" color="text" boxShadow="md">
			<Container maxW="container.xl" py={4}>
				<Flex justify="space-between" align="center">
					<Link href="/" passHref>
						<Button variant="ghost">Home</Button>
					</Link>
					<ColorModeToggle />
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
