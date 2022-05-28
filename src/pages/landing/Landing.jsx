import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import About from '../about';
import Games from '../games';
import BestPractices from '../best-practices';
import Projects from '../projects';

const Home = () => {
	return (
		<Grid container direction='row' alignItems='stretch' spacing={3}>
			<Grid item container direction='column'>
				<Grid item>
					<Typography variant='h3'>Projects</Typography>
					<Divider variant='inset' />
				</Grid>
				<Grid item>
					<Projects />
				</Grid>
			</Grid>
			<Grid item container direction='column'>
				<Grid item>
					<Typography variant='h3'>Games</Typography>
					<Divider variant='inset' />
				</Grid>
				<Grid item>
					<Games />
				</Grid>
			</Grid>
			<Grid item container direction='column'>
				<Grid item>
					<Typography variant='h3'>Best Practices</Typography>
					<Divider variant='inset' />
				</Grid>
				<Grid item>
					<BestPractices />
				</Grid>
			</Grid>

			<Grid item container justifyContent='flex-end'>
				<Grid item>
					<About />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
