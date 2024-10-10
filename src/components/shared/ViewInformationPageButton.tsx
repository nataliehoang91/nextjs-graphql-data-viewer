"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, type ButtonProps, Icon } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ViewInformationPageButtonProps extends ButtonProps {
	children?: React.ReactNode;
}

const ViewInformationPageButton = ({
	children,
	...props
}: ViewInformationPageButtonProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.push("/information");
	};

	return (
		<Button
			onClick={handleClick}
			colorScheme="teal"
			size="lg"
			rightIcon={<Icon as={ArrowForwardIcon} />}
			fontWeight="semibold"
			borderRadius="md"
			_hover={{
				transform: "translateY(-2px)",
				boxShadow: "md",
			}}
			_active={{
				transform: "translateY(0)",
			}}
			transition="all 0.2s"
			aria-label="View anime information"
			{...props}
		>
			{children || "Explore More Anime"}
		</Button>
	);
};

export default ViewInformationPageButton;
