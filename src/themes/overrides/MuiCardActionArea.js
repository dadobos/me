const MuiCardActionArea = {
	styleOverrides: {
		root: {
			'@media (min-width: 900px)': {
				filter: 'grayscale(1);',
				'&:hover': {
					filter: 'grayscale(0);',
					transition: 'all .3s ease',
				},
			},
		},
	},
};

export default MuiCardActionArea;
