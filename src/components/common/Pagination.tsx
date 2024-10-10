import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@chakra-ui/icons";
import { Box, Button, HStack, Text } from "@chakra-ui/react";

type PaginationProps = {
	page: number;
	lastPage: number;
	loading: boolean;
	onPageChange: (newPage: number) => void;
};

const Pagination = ({
	page,
	lastPage,
	loading,
	onPageChange,
}: PaginationProps) => {
	return (
		<Box aria-label="Pagination">
			<HStack spacing={2} justifyContent="center">
				<Button
					onClick={() => onPageChange(1)}
					isDisabled={page === 1 || loading}
					size="sm"
					colorScheme="teal"
					leftIcon={<ArrowLeftIcon />}
					aria-label="Go to first page"
				/>
				<Button
					onClick={() => onPageChange(page - 1)}
					isDisabled={page === 1 || loading}
					size="sm"
					colorScheme="teal"
					leftIcon={<ChevronLeftIcon boxSize={8} />}
					aria-label="Go to previous page"
				/>
				<Text fontWeight="medium" aria-live="polite" aria-atomic="true">
					Page {page} of {lastPage || "..."}
				</Text>
				<Button
					onClick={() => onPageChange(page + 1)}
					isDisabled={page >= lastPage || loading}
					size="sm"
					colorScheme="teal"
					rightIcon={<ChevronRightIcon boxSize={8} />}
					aria-label="Go to next page"
				/>
				<Button
					onClick={() => onPageChange(lastPage)}
					isDisabled={page === lastPage || loading}
					size="sm"
					colorScheme="teal"
					rightIcon={<ArrowRightIcon />}
					aria-label="Go to last page"
				/>
			</HStack>
		</Box>
	);
};

export default Pagination;
