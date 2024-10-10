"use client";

import { deleteServerCookie } from "@/utils/cookiesActions";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Container,
	Divider,
	Flex,
	HStack,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
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

	const bgColor = useColorModeValue(
		"rgba(255, 255, 255, 0.8)",
		"rgba(26, 32, 44, 0.8)",
	);
	return (
		<Box
			as="nav"
			bg={bgColor}
			color="text"
			boxShadow="sm"
			position="fixed"
			top={0}
			left={0}
			right={0}
			zIndex={1000}
		>
			<Container maxW="container.xl" py={4}>
				<Flex justify="space-between" align="center">
					<Link href="/" passHref>
						<Button variant="ghost">Home</Button>
					</Link>
					<HStack spacing={4}>
						<ColorModeToggle />
						{isSignedIn ? (
							<Menu>
								<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
									<Text as="span" fontWeight="medium" mr={2}>
										{userName}
									</Text>
									<Text as="span" fontSize="sm" color="gray.500">
										{jobTitle}
									</Text>
								</MenuButton>
								<MenuList>
									<Link href="/profile" passHref legacyBehavior>
										<MenuItem>Profile</MenuItem>
									</Link>
									<Divider />
									<MenuItem onClick={handleSignOut}>Log Out</MenuItem>
								</MenuList>
							</Menu>
						) : null}
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
