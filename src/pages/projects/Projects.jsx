import React from 'react';
import { Grid } from '@mui/material';
import ProjectData from 'data/Data';
import MainCard from 'components/main-card/MainCard';

const Projects = () => {
	return (
		<Grid
			container
			direction='row'
			alignItems='flex-start'
			justifyContent='baseline'
			spacing={4}
			sx={{ my: 1 }}>
			{ProjectData.map((project) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					key={project.title}
					sx={{ alignItems: 'center', justifyContent: 'center' }}>
					<MainCard
						imageURL={project.imageURL}
						title={project.title}
						description={project.description}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Projects;
