"use client";

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

const ToastProvider = () => {
	const { theme } = useTheme();

	return (
		<ToastContainer
			position="bottom-right"
			autoClose={1500}
			theme={theme === "dark" ? "dark" : "light"}
		/>
	);
};

export default ToastProvider;
