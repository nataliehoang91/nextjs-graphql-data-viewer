"use server";

import { cookies } from "next/headers";

export const getServerCookie = async (name: string) => {
	const cookieStore = cookies();
	return cookieStore.get(name)?.value || "";
};

export const setServerCookie = async (name: string, value: string) => {
	const cookieStore = cookies();
	cookieStore.set(name, value, {
		path: "/",
	});
};

export const deleteServerCookie = async (name: string) => {
	const cookieStore = cookies();
	cookieStore.set(name, "", {
		path: "/",
		maxAge: 0,
	});
};
