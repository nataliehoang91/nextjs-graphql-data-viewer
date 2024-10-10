"use client";

import { gql, useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";

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
	const page = Number(searchParams.get("page")) || 1;

	const { data, loading, error } = useQuery(GET_ANIME_INFORMATION, {
		variables: { page, perPage: ITEMS_PER_PAGE },
	});

	console.log("data", data);

	return <Box>{JSON.stringify(data, null, 2)}</Box>;
};

export default InformationPage;
