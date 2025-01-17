import { SimpleGrid, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
import SkeletonCard from "./SkeletonCard";
import type { AnimeData } from "./types";

type InfoGridProps = {
	loading: boolean;
	media: AnimeData[];
	openAnimeOverviewDrawer: (animeId: number) => void;
};

const InfoGrid = ({
	loading,
	media,
	openAnimeOverviewDrawer,
}: InfoGridProps) => {
	const textColor = useColorModeValue("gray.700", "gray.200");

	return (
		<VStack spacing={8}>
			<Text fontSize="3xl" fontWeight="bold" color={textColor}>
				Popular Anime
			</Text>
			<SimpleGrid columns={[1, 2, 3, 4]} spacing={8} w="100%">
				{loading
					? Array.from({ length: 12 }).map((_, index) => (
							<SkeletonCard key={`skeleton-${index + 1}`} />
						))
					: media.map((anime: AnimeData) => (
							<AnimeCard
								key={anime.id}
								anime={anime}
								onClick={() => openAnimeOverviewDrawer(anime.id)}
							/>
						))}
			</SimpleGrid>
		</VStack>
	);
};

export default InfoGrid;
