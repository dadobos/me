import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from 'App';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';

const DarkModeToggle = () => {
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<IconButton onClick={colorMode.toggleColorMode} sx={{ color: theme.palette.text.secondary }} >
			{theme.palette.mode === 'dark' ? (
				<WbSunnyOutlinedIcon />
			) : (
				<NightsStayOutlinedIcon />
			)}
		</IconButton>
	);
};

export default DarkModeToggle;
