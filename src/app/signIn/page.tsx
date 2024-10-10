import { setServerCookie } from "@/utils/cookiesActions";
import {
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";

const SignIn = async () => {
	const handleSignIn = async (formData: FormData) => {
		"use server";
		const userName = formData.get("userName");
		const jobTitle = formData.get("jobTitle");

		if (!userName || !jobTitle) {
			return;
		}
		if (typeof userName !== "string" || typeof jobTitle !== "string") {
			return;
		}
		setServerCookie("userName", userName);
		setServerCookie("jobTitle", jobTitle);
		redirect("/");

		console.log(formData);
	};
	return (
		<Container maxW="container.lg" py={10}>
			<Heading as="h1" size="2xl" textAlign="center" mb={4}>
				Sign In
			</Heading>
			<form action={handleSignIn}>
				<FormControl>
					<FormLabel>Username</FormLabel>
					<Input name="userName" type="text" />
				</FormControl>
				<FormControl>
					<FormLabel>Job title</FormLabel>
					<Input name="jobTitle" type="text" />
				</FormControl>
				<Button type="submit">Sign In</Button>
			</form>
		</Container>
	);
};

export default SignIn;
