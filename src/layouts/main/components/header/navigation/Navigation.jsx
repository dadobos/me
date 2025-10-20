import React, { useState, useEffect, createRef, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Tabs,
	Tab,
	useMediaQuery,
	IconButton,
	SwipeableDrawer,
	Paper,
	ListItem,
	ListItemText,
	List,
	ListItemButton,
	Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import { useIntl } from "react-intl";
import LanguageSwitcher from "layouts/common/languageSwitcher";
import DarkModeToggle from "layouts/common/darkModeToggle";

const Navigation = () => {
	const theme = useTheme();
	const t = useIntl();

	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	const iOS =
		typeof navigator !== "undefined" &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	const [value, setValue] = useState(1);
	const [openDrawer, setOpenDrawer] = useState(false);

	const tabsActions = useRef(null);
	const wrapper = createRef();

	const handleTabsChange = (e, newValue) => {
		setValue(newValue);
	};

	const handleDrawerClose = () => {
		setTimeout(() => {
			setOpenDrawer(false);
		}, 100);
	};

	const routes = useMemo(
		() => [
			{
				name: t.formatMessage({
					id: "navigation.home",
					defaultMessage: "Home",
				}),
				link: "/",
				activeIndex: 0,
			},
			{
				name: t.formatMessage({
					id: "navigation.projects",
					defaultMessage: "Projects",
				}),
				link: "/projects",
				activeIndex: 1,
			},
			{
				name: t.formatMessage({
					id: "navigation.best-practices",
					defaultMessage: "Best Practices",
				}),
				link: "/best-practices",
				activeIndex: 2,
			},
			{
				name: t.formatMessage({
					id: "navigation.blog",
					defaultMessage: "Blog",
				}),
				link: "/blog",
				activeIndex: 3,
			},
			{
				name: t.formatMessage({
					id: "navigation.about",
					defaultMessage: "About",
				}),
				link: "/about",
				activeIndex: 4,
			},
		],
		[t]
	);

	useEffect(() => {
		routes.forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex);
					}
					break;
				default:
					return false;
			}
		});
	}, [value, routes]);

	return (
		<Container ref={wrapper}>
			<Paper
				elevation={0}
				sx={{
					display: { sm: "none", xs: "flex" },
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "inherit",
					color: theme.palette.secondary.contrastText,
					boxShadow: "none",
				}}>
				<IconButton
					size="large"
					onClick={() => setOpenDrawer(!openDrawer)}
					sx={{ color: theme.palette.text.secondary }}>
					{openDrawer ? <MenuOpenIcon /> : <MenuIcon />}
				</IconButton>
				<Box sx={{ display: "inline-flex" }}>
					<LanguageSwitcher />
					<DarkModeToggle />
				</Box>
			</Paper>

			{matches ? (
				<SwipeableDrawer
					disableBackdropTransition={!iOS}
					disableDiscovery={iOS}
					disableSwipeToOpen={false}
					open={openDrawer}
					onOpen={() => setOpenDrawer(true)}
					onClose={() => setOpenDrawer(false)}
					sx={{
						backgroundColor: "transparent",
					}}>
					<List sx={{ paddingTop: "4rem" }}>
						{routes.map((route) => (
							<ListItem
								sx={{
									// padding: "1.5rem 2rem ",
									color: theme.palette.text.secondary,
									width: "100%",
									"&.Mui-selected": {
										backgroundColor: theme.palette.background.paper,
									},
								}}
								key={`${route.activeIndex}`}
								disablePadding>
								<ListItemButton
									component={Link}
									to={route.link}
									value={route.activeIndex}
									selected={value === route.activeIndex}
									onClick={() => {
										setValue(route.activeIndex);
										handleDrawerClose();
									}}
									sx={{ padding: "1.5rem 2rem" }}>
									<ListItemText
										disableTypography
										sx={{
											alignItems: "flex-start",
											fontSize: "1.2rem",
											textTransform: "capitalize",
										}}>
										{route.name}
									</ListItemText>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</SwipeableDrawer>
			) : (
				<Paper
					elevation={0}
					sx={{
						display: { sm: "block", xs: "none" },
					}}>
					<Tabs
						action={tabsActions}
						value={value}
						onChange={handleTabsChange}
						centered
						TabIndicatorProps={{
							style: {
								background: theme.palette.secondary.contrastText,
								height: "3px",
							},
						}}>
						{routes.map((route) => (
							<Tab
								disableRipple
								key={`${route.activeIndex}`}
								label={route.name}
								component={Link}
								to={route.link}
								sx={{
									fontSize: "1.2rem",
									"&.Mui-selected": {
										color: theme.palette.secondary.contrastText,
									},
								}}
							/>
						))}
					</Tabs>
				</Paper>
			)}
		</Container>
	);
};
export default Navigation;
