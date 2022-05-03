import React, { useState, useEffect, createRef, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import DarkModeToogle from 'layouts/common/darkModeToogle';

const Navigation = () => {
	const theme = useTheme();

	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const iOS =
		typeof navigator !== 'undefined' &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	const [value, setValue] = useState(1);
	const [openDrawer, setOpenDrawer] = useState(false);

	const tabsActions = useRef(null);
	const wrapper = createRef();

	const handleTabsChange = (e, newValue) => {
		setValue(newValue);
	};

	const routes = useMemo(
		() => [
			{
				name: 'Home',
				link: '/',
				activeIndex: 0,
			},
			{
				name: 'Projects',
				link: '/projects',
				activeIndex: 1,
			},
			{
				name: 'Games',
				link: '/games',
				activeIndex: 2,
			},
			{
				name: 'Best Practices',
				link: '/best-practices',
				activeIndex: 3,
			},
			{
				name: 'About',
				link: '/about',
				activeIndex: 4,
			},
		],
		[]
	);

	useEffect(() => {
		routes.forEach((route) => {
			switch (window.location.pathname) {
				case `${route.link}`:
					if (value !== route.activeIndex) {
						setValue(route.activeIndex);
						setOpenDrawer(false);
					}
					break;
				default:
					return false;
			}
		});
	}, [value, openDrawer, routes]);

	return (
		<Container ref={wrapper}>
			<Paper
				elevation={0}
				sx={{
					display: { sm: 'none', xs: 'flex' },
					justifyContent: 'space-between',
					alignItems: 'center',
					backgroundColor: 'inherit',
					color: theme.palette.secondary.contrastText,
					boxShadow: 'none',
				}}>
				<IconButton
					size='large'
					onClick={() => setOpenDrawer(!openDrawer)}
					disableRipple
					color='inherit'>
					{openDrawer ? (
						<MenuOpenIcon fontSize='inherit' />
					) : (
						<MenuIcon fontSize='inherit' />
					)}
				</IconButton>
				<DarkModeToogle style={{ alignSelf: 'right', color: 'inherit' }} />
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
						backgroundColor: 'transparent',
					}}>
					<List sx={{ paddingTop: '4rem' }}>
						{routes.map((route) => (
							<ListItem
								sx={{
									padding: '1.5rem 2rem ',
									color: theme.palette.text.secondary,
									width: '100%',
									'&.Mui-selected': {
										backgroundColor: theme.palette.background.paper,
									},
								}}
								key={`${route}${route.activeIndex}`}
								button
								component={Link}
								to={route.link}
								value={route.activeIndex}
								selected={value === route.activeIndex}
								onClick={() => {
									setValue(route.activeIndex);
									setOpenDrawer(false);
								}}>
								<ListItemText
									disableTypography
									sx={{
										alignItems: 'flex-start',
										fontSize: '1.2rem',
										textTransform: 'capitalize',
									}}>
									{route.name}
								</ListItemText>
							</ListItem>
						))}
					</List>
				</SwipeableDrawer>
			) : (
				<Paper
					elevation={0}
					sx={{
						display: { sm: 'block', xs: 'none' },
					}}>
					<Tabs
						action={tabsActions}
						value={value}
						onChange={handleTabsChange}
						centered
						TabIndicatorProps={{
							style: {
								background: theme.palette.secondary.contrastText,
								height: '3px',
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
									fontSize: '1.2rem',
									'&.Mui-selected': {
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
