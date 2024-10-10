import "./globals.css";
import { Box } from "@chakra-ui/react";
import ApolloProviderWrapper from "../ApolloProviderWrapper";
import ChakraProviderWrapper from "../ChakraProviderWrapper";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ApolloProviderWrapper>
					<ChakraProviderWrapper>
						<Box as="main">{children}</Box>
					</ChakraProviderWrapper>
				</ApolloProviderWrapper>
			</body>
		</html>
	);
}
