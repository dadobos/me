import React from 'react';
import {
	Grid,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material';
import MainCard from 'components/main-card/MainCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MainAccordion = ({items, title}) => {
	return (
		<Accordion
			defaultExpanded
			TransitionProps={{ unmountOnExit: true }}
			sx={{ background: 'transparent' }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'>
				<Typography variant='h5'>{ title }</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid
					container
					direction='row'
					alignItems='flex-start'
					justifyContent='baseline'
					spacing={3}>
					{items.map((project) => (
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
								url={project.url}
							/>
						</Grid>
					))}
				</Grid>
			</AccordionDetails>
		</Accordion>
	);
};

export default MainAccordion;
