import React from 'react';

import { Link } from 'react-router-dom';

import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	Breadcrumbs,
	Link as MaterialLink,
	Grid,
	IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThreeSixtyOutlinedIcon from '@mui/icons-material/ThreeSixtyOutlined';

import DarkModeToggle from 'layouts/common/darkModeToggle';
import HideOnScroll from 'layouts/common/hideOnScroll';

const handleScrollDown = (event) => {
	event.preventDefault();
	const anchor = (event.target.ownerDocument || document).querySelector(
		'#footer'
	);

	if (anchor) {
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}
};

const Header = () => {
	const theme = useTheme();

	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar
					position='fixed'
					sx={{
						background: 'transparent',
						zIndex: 1301,
						[theme.breakpoints.down('lg')]: {
							backgroundColor: theme.palette.background.default,
						},
					}}
					elevation={0}>
					<Toolbar>
						<Grid container justifyContent='space-between' alignItems='center'>
							<Grid item>
								<Breadcrumbs aria-label='breadcrumb'>
									<Typography
										variant='h5'
										sx={{
											textTransform: 'uppercase',
											letterSpacing: '.2rem',
										}}>
										Dan Dobos
									</Typography>

									<MaterialLink
										color='textPrimary'
										to='#about'
										style={{ cursor: 'pointer' }}
										onClick={handleScrollDown}>
										About
									</MaterialLink>
								</Breadcrumbs>
							</Grid>
							<Grid item>
								<Grid container alignItems='center'>
									<Link to='/projects'>
										<IconButton disableRipple sx={{ mr: 1 }}>
											<ThreeSixtyOutlinedIcon />
										</IconButton>
									</Link>
									<DarkModeToggle />
								</Grid>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
};
export default Header;
