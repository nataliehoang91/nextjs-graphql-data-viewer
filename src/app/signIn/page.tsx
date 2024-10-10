import SubmitButton from "@/components/shared/SubmitButton";
import UserInfoForm from "@/components/shared/UserInfoForm";
import { setServerCookie } from "@/utils/cookiesActions";
import {
	Box,
	Button,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	VStack,
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
		if (userName && jobTitle) {
			setServerCookie("userName", userName.toString());
			setServerCookie("jobTitle", jobTitle.toString());
			redirect("/");
		}
	};
	return (
		<Container maxW="md" py={12}>
			<VStack spacing={8} align="stretch">
				<Heading as="h1" size="xl" textAlign="center">
					Sign In
				</Heading>

				<Box p={4} boxShadow="lg" borderRadius="lg" w="100%">
					<form action={handleSignIn}>
						<VStack spacing={6}>
							<UserInfoForm />
							<SubmitButton type="submit" width="full">
								Sign In
							</SubmitButton>
						</VStack>
					</form>
				</Box>
			</VStack>
		</Container>
	);
};

export default SignIn;
