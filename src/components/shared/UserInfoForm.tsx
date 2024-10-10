import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const UserInfoForm = () => {
	return (
		<>
			<FormControl>
				<FormLabel>Username</FormLabel>
				<Input name="userName" type="text" />
			</FormControl>
			<FormControl>
				<FormLabel>Job title</FormLabel>
				<Input name="jobTitle" type="text" />
			</FormControl>
		</>
	);
};

export default UserInfoForm;
