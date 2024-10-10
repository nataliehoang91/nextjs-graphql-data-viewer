"use client";

import { deleteServerCookie } from "@/utils/cookiesActions";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import ColorModeToggle from "./common/ColorModeToggle";

type NavbarProps = {
	isSignedIn: boolean;
	userName: string;
	jobTitle: string;
};
const Navbar = ({ isSignedIn, userName, jobTitle }: NavbarProps) => {
	const handleSignOut = async () => {
		await deleteServerCookie("userName");
		await deleteServerCookie("jobTitle");
		redirect("/");
	};
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
					<Button onClick={handleSignOut}>Sign Out</Button>
					<Link href="/profile">
						<Button>Profile</Button>
					</Link>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
