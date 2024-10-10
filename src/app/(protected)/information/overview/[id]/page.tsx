"use client";

import { gql, useQuery } from "@apollo/client";
import {
	AspectRatio,
	Badge,
	Box,
	Link as ChakraLink,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Image,
	Skeleton,
	SkeletonText,
	Text,
	VStack,
	useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

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
	const router = useRouter();
	const toast = useToast();
	const { data, loading, error } = useQuery(GET_ANIME_BY_ID, {
		variables: { id: Number(params.id) },
	});

	if (error) {
		toast({
			title: "Error",
			description: "Failed to fetch anime details",
			status: "error",
		});
	}

	if (data) {
		const anime = data?.Media;
		const handleClose = () => {
			router.back();
		};

		return (
			<Drawer
				size="lg"
				blockScrollOnMount={false}
				trapFocus={false}
				autoFocus={false}
				isOpen
				onClose={handleClose}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton disabled={loading} />
					{loading ? (
						<Box p={6}>
							<Skeleton height="20px" width="80%" />
							<Skeleton height="400px" width="100%" mt={4} />
							<SkeletonText
								mt={4}
								noOfLines={6}
								spacing="4"
								skeletonHeight="2"
							/>
						</Box>
					) : (
						<>
							<DrawerHeader borderBottomWidth="1px">
								{anime?.title.romaji}
							</DrawerHeader>
							<DrawerBody>
								<VStack align="stretch" spacing={6}>
									<AspectRatio ratio={16 / 9} maxH="300px">
										<Image
											src={anime?.coverImage.large}
											alt={anime?.title.romaji}
											objectFit="cover"
											borderRadius="md"
										/>
									</AspectRatio>
									<VStack align="stretch" spacing={3}>
										<Text fontWeight="bold">{anime?.title.english}</Text>
										<ChakraLink
											color="teal.500"
											href={anime?.siteUrl}
											isExternal
										>
											View more details
										</ChakraLink>

										<HStack>
											<Text fontWeight="bold">Genres:</Text>
											<HStack spacing={2} flexWrap="wrap">
												{anime?.genres.map((genre: string, index: number) => (
													<Badge
														key={genre}
														colorScheme="teal"
														borderRadius="full"
													>
														{genre}
													</Badge>
												))}
											</HStack>
										</HStack>
										<Text>
											<strong>Average Score:</strong> {anime?.averageScore}
										</Text>
										<Text fontWeight="bold">Description:</Text>
										<Box
											// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
											dangerouslySetInnerHTML={{
												__html: anime?.description || "",
											}}
											sx={{
												p: {
													marginBottom: "1em",
												},
											}}
										/>
									</VStack>
								</VStack>
							</DrawerBody>
						</>
					)}
				</DrawerContent>
			</Drawer>
		);
	}
};
export default OverviewPage;
