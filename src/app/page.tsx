import SignInButton from "@/components/shared/SignInButton";
import ViewInformationPageButton from "@/components/shared/ViewInformationPageButton";
import { getServerCookie } from "@/utils/cookiesActions";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Home = async () => {
	const savedUsername = await getServerCookie("userName");
	const savedJobTitle = await getServerCookie("jobTitle");

	const isSignedIn = !!savedUsername && !!savedJobTitle;
	return (
		<Box bg="bg-accent" minH="100vh">
			<Container maxW="container.lg" py={10}>
				<VStack spacing={8} align="stretch">
					<Box>
						<Heading as="h1" size="2xl" textAlign="center" mb={4}>
							Welcome to Anime Explorer
						</Heading>
						<Text fontSize="xl" textAlign="center" mb={8}>
							Discover and explore your favorite anime series
						</Text>
					</Box>

					<Box
						bg="bg-accent"
						p={6}
						borderRadius="lg"
						boxShadow="md"
						aria-labelledby="features-heading"
					>
						<Heading as="h2" size="lg" mb={4} id="features-heading">
							Key Features
						</Heading>
						<VStack align="start" spacing={3}>
							<Text>✨ Browse popular anime titles</Text>
							<Text>🔍 Search for specific series</Text>
							<Text>📊 View detailed information and ratings</Text>
							<Text>🌟 Create your personal watchlist</Text>
						</VStack>
					</Box>

					<Box textAlign="center">
						{isSignedIn ? (
							<VStack spacing={4}>
								<Text fontSize="lg">
									Welcome back, {savedUsername}! Ready to explore more anime?
								</Text>
								<ViewInformationPageButton />
							</VStack>
						) : (
							<VStack spacing={6}>
								<Text fontSize="lg">
									Sign in to access all features and personalize your
									experience.
								</Text>
								<SignInButton />
							</VStack>
						)}
					</Box>
				</VStack>
			</Container>
		</Box>
	);
};

export default Home;
