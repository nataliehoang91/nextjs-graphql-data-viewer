"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, type ButtonProps, Icon } from "@chakra-ui/react";
import Link from "next/link";

interface SignInButtonProps extends ButtonProps {
	href?: string;
}

const SignInButton = ({ href = "/signIn", ...props }: SignInButtonProps) => {
	return (
		<Link href={href} passHref>
			<Button
				colorScheme="teal"
				size="lg"
				variant="outline"
				rightIcon={<Icon as={ArrowForwardIcon} />}
				fontWeight="semibold"
				borderRadius="md"
				_hover={{
					boxShadow: "md",
				}}
				_active={{
					transform: "translateY(0)",
				}}
				aria-label="Sign in to Anime Explorer"
				{...props}
			>
				Sign in to Anime Explorer
			</Button>
		</Link>
	);
};

export default SignInButton;
