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
			onClick={appContext.toggleColorMode}
			sx={{ color: theme.palette.text.secondary }}>
			{theme.palette.mode === "dark" ? (
				<WbSunnyOutlinedIcon />
			) : (
				<NightsStayOutlinedIcon />
			)}
		</IconButton>
	);
};

export default DarkModeToggle;
