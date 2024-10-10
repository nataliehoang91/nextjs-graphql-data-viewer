import { getServerCookie } from "@/utils/cookiesActions";
import { Box } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import InformationContainer from "./InformationContainer";

const InformationLayout = async ({
	children,
}: { children: React.ReactNode }) => {
	const userName = await getServerCookie("userName");
	const jobTitle = await getServerCookie("jobTitle");

	const isSignedIn = !!userName && !!jobTitle;

	if (!isSignedIn) {
		return redirect("/signIn");
	}
	return (
		<Box>
			{children}
			<InformationContainer />
		</Box>
	);
};

export default InformationLayout;
