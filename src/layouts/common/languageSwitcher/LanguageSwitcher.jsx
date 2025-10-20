import React, { useContext } from "react";
import { AppContext } from "App";
import { useTheme } from "@mui/material/styles";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

// import { FormattedMessage } from "react-intl";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const LanguageSwitcher = () => {
	const theme = useTheme();
	const appContext = useContext(AppContext);
	const currentLocale = appContext && appContext.locale === "en" ? "NL" : "EN";

	return (
		<Tooltip
			title={currentLocale}
			disableInteractive
			slots={{
				transition: Zoom,
			}}>
			<span>
				<IconButton
					aria-label="Language Switcher"
					onClick={() => {
						const setLocale = appContext && appContext.setLocale;
						if (typeof setLocale === "function") {
							setLocale(appContext.locale === "en" ? "nl" : "en");
						}
					}}
					size="large"
					sx={{
						alignSelf: "right",
						mr: 1,
						ml: 1,
						color: theme.palette.text.secondary,
						fontSize: "24px",
					}}>
					{<LanguageOutlinedIcon />}
				</IconButton>
			</span>
		</Tooltip>
	);
};

export default LanguageSwitcher;
