"use client";

import { gql, useQuery } from "@apollo/client";
import { Box, Container, Image, SimpleGrid } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const GET_ANIME_INFORMATION = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
        description
        genres
        averageScore
        siteUrl
      }
    }
  }
`;

const ITEMS_PER_PAGE = 12;

const InformationPage = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const page = Number(searchParams.get("page")) || 1;

	const { data, loading, error } = useQuery(GET_ANIME_INFORMATION, {
		variables: { page, perPage: ITEMS_PER_PAGE },
	});

	console.log("data", data);

	const handleAnimeClick = (id: number) => {
		router.push(`/information/overview/${id}`);
	};

	return (
		<Container>
			<SimpleGrid columns={4} spacing={4}>
				{data?.Page?.media.map((anime) => (
					<Box
						as="button"
						key={anime.id}
						onClick={() => handleAnimeClick(anime.id)}
					>
						<Image src={anime.coverImage.large} alt={anime.title.romaji} />
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default InformationPage;
