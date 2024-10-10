import "./globals.css";
import Navbar from "@/components/Navbar";
import { getServerCookie } from "@/utils/cookiesActions";
import { Box } from "@chakra-ui/react";
import ApolloProviderWrapper from "../ApolloProviderWrapper";
import ChakraProviderWrapper from "../ChakraProviderWrapper";

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const userName = getServerCookie("userName");
	const jobTitle = getServerCookie("jobTitle");

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
						<Box as="main">{children}</Box>
					</ChakraProviderWrapper>
				</ApolloProviderWrapper>
			</body>
		</html>
	);
};

export default RootLayout;
