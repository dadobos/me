import React from 'react';

import { AppBar, Toolbar, CssBaseline, Box } from '@mui/material';

import DarkModeToogle from 'layouts/common/darkModeToogle';
import HideOnScroll from 'layouts/common/hideOnScroll';
import Navigation from './navigation';

const Header = () => {
	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar sx={{ position: 'fixed', zIndex: 1301 }} elevation={0}>
					<Toolbar>
						<Navigation />
						<Box sx={{ display: { sm: 'block', xs: 'none' } }}>
							<DarkModeToogle />
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
};
export default Header;
