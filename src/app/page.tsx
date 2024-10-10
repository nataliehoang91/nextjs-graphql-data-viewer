import { Box, Container, Heading } from "@chakra-ui/react";

const Home = () => {
	return (
		<Box bg="bg-accent" minH="100vh">
			<Container maxW="container.lg" py={10}>
				<Heading as="h1" size="2xl" textAlign="center" mb={4}>
					Welcome to Anime Explorer
				</Heading>
			</Container>
		</Box>
	);
};

export default Home;
