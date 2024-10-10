import UserInfoForm from "@/components/shared/UserInfoForm";
import { getServerCookie, setServerCookie } from "@/utils/cookiesActions";
import {
	Button,
	Container,
	FormControl,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";

const Profile = async () => {
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
		setServerCookie("userName", newUserName);
		setServerCookie("jobTitle", newJobTitle);
	};

	return (
		<Container maxW="md" py={12}>
			Profile
			<form action={handleUpdateProfile}>
				<UserInfoForm />
				<Button type="submit">Update Profile</Button>
			</form>
		</Container>
	);
};

export default Profile;
