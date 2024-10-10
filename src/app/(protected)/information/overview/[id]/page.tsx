"use client";

import { gql, useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
const GET_ANIME_BY_ID = gql`
  query ($id: Int) {
    Media(id: $id) {
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
`;
const OverviewPage = ({ params }: { params: { id: string } }) => {
	const { data, loading, error } = useQuery(GET_ANIME_BY_ID, {
		variables: { id: Number(params.id) },
	});

	const anime = data?.Media;
	console.log("hhh", anime?.siteUrl);

	return <Box>{JSON.stringify(anime, null, 2)}</Box>;
};

export default OverviewPage;
