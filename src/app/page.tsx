import { getServerCookie } from "@/utils/cookiesActions";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Home = async () => {
	const userName = await getServerCookie("userName");
	const jobTitle = await getServerCookie("jobTitle");

	const isSignedIn = !!userName && !!jobTitle;
	return (
		<Box bg="bg-accent" minH="100vh">
			<Container maxW="container.lg" py={10}>
				<Heading as="h1" size="2xl" textAlign="center" mb={4}>
					Welcome to Anime Explorer
				</Heading>
				{isSignedIn ? (
					<Text>Welcome, {userName}!</Text>
				) : (
					<Text>Please sign in to continue.</Text>
				)}
			</Container>
		</Box>
	);
};

export default Home;
