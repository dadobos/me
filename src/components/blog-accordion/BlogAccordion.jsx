import React from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BlogAccordion = ({blogContent}) => {
	return (
        blogContent.map(({title, description}) => (
		<Accordion
			// defaultExpanded
			// slotProps={{ unmountOnExit: true }}
			key={title}
			sx={{ background: 'transparent' }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
									id='panel1a-header'>
				<Typography variant='h5'>{ title }</Typography>
			</AccordionSummary>
			<AccordionDetails>
               {description.map((lineContent, idx) => (
                <Typography 
                    key={idx} paragraph>{lineContent}</Typography>
               ))}
			</AccordionDetails>
		</Accordion>
	)));
};

export default BlogAccordion;