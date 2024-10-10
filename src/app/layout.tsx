import "./globals.css";
import Navbar from "@/components/Navbar";
import { getServerCookie } from "@/utils/cookiesActions";
import { Box } from "@chakra-ui/react";
import ApolloProviderWrapper from "../ApolloProviderWrapper";
import ChakraProviderWrapper from "../ChakraProviderWrapper";

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const userName = await getServerCookie("userName");
	const jobTitle = await getServerCookie("jobTitle");

	const isSignedIn = !!userName && !!jobTitle;

	return (
		<html lang="en">
			<body>
				<ApolloProviderWrapper>
					<ChakraProviderWrapper>
						<Navbar
							isSignedIn={isSignedIn}
							userName={userName}
							jobTitle={jobTitle}
						/>
						<Box as="main" mt="72px">
							{children}
						</Box>
					</ChakraProviderWrapper>
				</ApolloProviderWrapper>
			</body>
		</html>
	);
};

export default RootLayout;
