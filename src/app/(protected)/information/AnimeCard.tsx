import { Badge, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

const AnimeCard = ({ anime, onClick }) => (
	<Box key={anime.id} onClick={onClick}>
		<Image
			src={anime.coverImage.large}
			alt={anime.title.romaji}
			objectFit="cover"
			width="100%"
			height="70%"
		/>
		<VStack p="4" height="30%" alignItems="flex-start" spacing={2}>
			<Text color="text" fontWeight="bold" fontSize="lg" noOfLines={2}>
				{anime.title.romaji}
			</Text>
			<HStack spacing={2} flexWrap="wrap">
				{anime.genres.slice(0, 2).map((genre, index) => (
					<Badge
						key={`${anime.id}-${index}`}
						borderRadius="full"
						px="2"
						colorScheme="teal"
					>
						{genre}
					</Badge>
				))}
			</HStack>
			<Text color="text" fontSize="sm">
				Score: {anime.averageScore}
			</Text>
		</VStack>
	</Box>
);

export default AnimeCard;
