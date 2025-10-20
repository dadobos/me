import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AppContext } from "App";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";

const DarkModeToggle = () => {
	const theme = useTheme();
	const appContext = useContext(AppContext);

	return (
		<IconButton
			aria-label="Dark Mode Toggle"
			onClick={appContext.toggleColorMode}
			size="large"
			sx={{
				alignSelf: "right",
				color: theme.palette.text.secondary,
				fontSize: "24px",
			}}>
			{theme.palette.mode === "dark" ? (
				<WbSunnyOutlinedIcon />
			) : (
				<NightsStayOutlinedIcon />
			)}
		</IconButton>
	);
};

export default DarkModeToggle;
