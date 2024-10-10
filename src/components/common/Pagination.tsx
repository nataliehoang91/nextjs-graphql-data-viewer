import page from "@/app/page";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	Text,
} from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Pagination = ({
	onPageChange,
	page,
	lastPage,
	loading,
}: {
	onPageChange: (page: number) => void;
	page: number;
	lastPage: number;
}) => {
	return (
		<div>
			<Button onClick={() => onPageChange(1)} />
			<Button onClick={() => onPageChange(page - 1)} />
			<Text fontWeight="medium" aria-live="polite" aria-atomic="true">
				Page {page} of {lastPage || "..."}
			</Text>
			<Button onClick={() => onPageChange(page + 1)} />
			<Button onClick={() => onPageChange(lastPage)} />
		</div>
	);
};

export default Pagination;
