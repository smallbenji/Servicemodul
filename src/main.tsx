import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Router from "./Router";

import { createTheme, ThemeProvider } from "@mui/material";

const Theme = createTheme({
	palette: {
		primary: {
			main: "#e75308",
		},
		secondary: {
			main: "#f50057",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={Theme}>
			<Router />
		</ThemeProvider>
	</React.StrictMode>
);
