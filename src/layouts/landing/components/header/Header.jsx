import React from "react";

import { Link } from "react-router-dom";

import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	Breadcrumbs,
	Link as MaterialLink,
	IconButton,
	Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixtyOutlined";

import LanguageSwitcher from "layouts/common/languageSwitcher";
import DarkModeToggle from "layouts/common/darkModeToggle";
import HideOnScroll from "layouts/common/hideOnScroll";

const Header = () => {
	const theme = useTheme();

	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar
					position="fixed"
					component="nav"
					sx={{
						background: "transparent",
						zIndex: 1301,
						[theme.breakpoints.down("lg")]: {
							backgroundColor: theme.palette.background.default,
						},
					}}
					elevation={0}>
					<Toolbar>
						<Typography component="div" sx={{ flexGrow: 1, display: "block" }}>
							<Breadcrumbs aria-label="breadcrumb">
								<Typography
									component="span"
									sx={{
										textTransform: "uppercase",
										letterSpacing: ".2rem",
										fontSize: "1.6rem",
									}}>
									Dan Dobos
								</Typography>
								{/*href="#about" is used to navigate within the page  */}
								<MaterialLink
									color="textPrimary"
									href="#about"
									sx={{ cursor: "pointer" }}>
									About
								</MaterialLink>
							</Breadcrumbs>
						</Typography>

						<Box sx={{ display: "block" }}>
							<Link to="/projects">
								<IconButton
									aria-label="Projects"
									size="large"
									sx={{ color: theme.palette.text.secondary }}>
									<ThreeSixtyIcon />
								</IconButton>
							</Link>
							<LanguageSwitcher />
							<DarkModeToggle />
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
};
export default Header;
