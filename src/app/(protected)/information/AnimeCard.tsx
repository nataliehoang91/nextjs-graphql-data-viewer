import { Badge, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import type { AnimeData } from "./types";

type AnimeCardProps = {
	anime: AnimeData;
	onClick: () => void;
};

const AnimeCard = ({ anime, onClick }: AnimeCardProps) => {
	const params = useParams();
	const isSelected = anime.id === Number.parseInt(params?.id as string);

	console.log(isSelected);
	return (
		<Box
			as="button"
			position="relative"
			borderRadius="lg"
			overflow="hidden"
			onClick={onClick}
			cursor="pointer"
			transition="transform 0.2s ease-in-out"
			_focus={{
				transform: "scale(1.05)",
				outline: "2px solid teal",
				shadow: "lg",
			}}
			_hover={{
				transform: "scale(1.05)",
				outline: "2px solid teal",
				shadow: "lg",
			}}
			height="400px"
			border={isSelected ? "2px solid" : "none"}
			borderColor={isSelected ? "blue.500" : "transparent"}
			bg="bg-surface"
			shadow="md"
			_mediaReduceMotion={{
				_hover: { transition: "none", outline: "2px solid teal" },
				_focus: { transition: "none", outline: "2px solid teal" },
			}}
		>
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
};

export default AnimeCard;
