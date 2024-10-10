"use client";

import Pagination from "@/components/common/Pagination";
import { gql, useQuery } from "@apollo/client";
import { Box, Container, Heading } from "@chakra-ui/react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import InfoGrid from "./InfoGrid";

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
	const params = useParams();

	const { loading, error, data } = useQuery(GET_ANIME_INFORMATION, {
		variables: { page, perPage: ITEMS_PER_PAGE },
		skip: !page,
	});

	const handlePageChange = (newPage: number) => {
		if (newPage <= pageInfo.lastPage && newPage >= 1) {
			router.push(`/information?page=${newPage}`);
		}
	};

	const openAnimeOverviewDrawer = (animeId: number) => {
		if (animeId) {
			router.push(`/information/overview/${animeId}?page=${page}`);
		}
	};

	if (error) return <p>Error: {error.message}</p>;

	const media = data?.Page?.media || [];
	const pageInfo = data?.Page?.pageInfo || {};

	return (
		<Box minHeight="100vh" py={10}>
			<Container maxW="container.xl">
				<Heading as="h1" size="2xl" textAlign="center" mb={10}>
					Anime Explorer
				</Heading>
				<InfoGrid
					loading={loading}
					media={media}
					openAnimeOverviewDrawer={openAnimeOverviewDrawer}
				/>
				<Box mt={10}>
					<Pagination
						page={page}
						lastPage={pageInfo.lastPage}
						loading={loading}
						onPageChange={handlePageChange}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default InformationPage;
