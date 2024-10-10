"use client";

import { Button } from "@chakra-ui/react";
import type { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
	children,
	...props
}: ComponentProps<typeof Button>) {
	const { pending } = useFormStatus();
	return (
		<Button {...props} colorScheme="teal" isLoading={pending}>
			{children}
		</Button>
	);
}
