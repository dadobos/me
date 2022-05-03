import React from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Grid, Grow, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


function ScrollTop(props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			'#back-to-top-anchor'
		);

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	return (
		<Grow
			in={trigger}
			style={{ transformOrigin: '0 0 0' }}
			{...(trigger ? { timeout: 1000 } : {})}>
			<Box onClick={handleClick} role='presentation'>
				{children}
			</Box>
		</Grow>
	);
}

const Footer = (props) => {
	const theme = useTheme();
	return (
		<Grid container justifyContent='center' alignItems='center' id='footer'>
			<ScrollTop {...props} >
				<KeyboardArrowUpIcon
					sx={{
						width: '5rem',
						height: '5rem',
						[theme.breakpoints.down('md')]: { width: '3rem', height: '3rem' },
					}}
				/>
			</ScrollTop>
		</Grid>
	);
};
export default Footer;
