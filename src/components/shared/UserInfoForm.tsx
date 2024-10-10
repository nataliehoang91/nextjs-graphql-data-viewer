"use client";

import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

type UserInfoFormProps = {
	userName?: string;
	jobTitle?: string;
};

const UserInfoForm = ({ userName, jobTitle }: UserInfoFormProps) => {
	return (
		<VStack spacing={4} align="stretch" w="100%">
			<FormControl isRequired>
				<FormLabel>Username</FormLabel>
				<Input
					name="userName"
					type="text"
					placeholder="Enter your username"
					defaultValue={userName}
					size="lg"
					pattern="\S+"
					title="Username cannot be empty or contain spaces"
				/>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Job Title</FormLabel>
				<Input
					name="jobTitle"
					type="text"
					placeholder="Enter your job title"
					defaultValue={jobTitle}
					size="lg"
					required
					maxLength={20}
					title="Job title cannot be empty and must be 20 characters or less"
				/>
			</FormControl>
		</VStack>
	);
};

export default UserInfoForm;
