import SubmitButton from "@/components/shared/SubmitButton";
import UserInfoForm from "@/components/shared/UserInfoForm";
import { getServerCookie, setServerCookie } from "@/utils/cookiesActions";
import {
	Alert,
	AlertDescription,
	AlertIcon,
	Box,
	Container,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const Profile = async ({
	searchParams,
}: {
	searchParams: { updated: string; error: string };
}) => {
	const userName = await getServerCookie("userName");
	const jobTitle = await getServerCookie("jobTitle");

	const isSignedIn = !!userName && !!jobTitle;

	if (!isSignedIn) {
		redirect("/signIn");
	}

	const handleUpdateProfile = async (formData: FormData) => {
		"use server";
		const newUserName = formData.get("userName");
		const newJobTitle = formData.get("jobTitle");

		if (!userName || !jobTitle) {
			return;
		}
		if (typeof userName !== "string" || typeof jobTitle !== "string") {
			return;
		}
		if (newUserName && newJobTitle) {
			setServerCookie("userName", newUserName.toString());
			setServerCookie("jobTitle", newJobTitle.toString());
			revalidatePath("/profile");
			redirect("/profile?updated=true");
		}
		return redirect("/profile?error=true");
	};

	return (
		<Container maxW="md" py={12}>
			<VStack spacing={8} align="stretch">
				<Heading as="h1" size="xl" textAlign="center">
					Your Profile
				</Heading>
				{searchParams.updated === "true" && (
					<Alert status="success">
						<AlertIcon />
						<AlertDescription>
							Your profile has been updated successfully.
						</AlertDescription>
					</Alert>
				)}
				{searchParams.error === "true" && (
					<Alert status="error">
						<AlertIcon />
						<AlertDescription>
							Please provide a valid username.
						</AlertDescription>
					</Alert>
				)}
				<Box p={8} boxShadow="lg" borderRadius="lg">
					<VStack spacing={6}>
						<Text fontSize="lg" fontWeight="medium">
							Welcome back, {userName}!
						</Text>
						<form action={handleUpdateProfile} style={{ width: "100%" }}>
							<VStack spacing={6}>
								<UserInfoForm userName={userName} jobTitle={jobTitle} />
								<SubmitButton type="submit" width="full">
									Update Profile
								</SubmitButton>
							</VStack>
						</form>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default Profile;
