import {
	Badge,
	Box,
	HStack,
	Image,
	SimpleGrid,
	Text,
	VStack,
	useColorModeValue,
} from "@chakra-ui/react";
import type { AnimeData } from "./types";

const InfoGrid = ({
	loading,
	media,
	openAnimeOverviewDrawer,
	infoId,
}: {
	loading: boolean;
	media: AnimeData[];
	openAnimeOverviewDrawer: (animeId: number) => void;
	infoId: number;
}) => {
	const textColor = useColorModeValue("gray.700", "gray.200");

	return (
		<VStack spacing={8}>
			<Text fontSize="3xl" fontWeight="bold" color={textColor}>
				Popular Anime
			</Text>
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={8} w="100%">
				{media.map((anime) => (
					<Box key={anime.id} onClick={() => openAnimeOverviewDrawer(anime.id)}>
						<Image src={anime.coverImage.large} alt={anime.title.romaji} />
					</Box>
				))}
			</SimpleGrid>
		</VStack>
	);
};

export default InfoGrid;
