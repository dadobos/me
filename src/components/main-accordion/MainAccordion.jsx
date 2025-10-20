import React from "react";
import {
	Grid2,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";
import MainCard from "components/main-card/MainCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MainAccordion = ({ items, title }) => {
	return (
		<Accordion
			defaultExpanded
			slotProps={{ transition: { unmountOnExit: true } }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header">
				<Typography variant="h5">{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Grid2
					container
					direction="row"
					alignItems="flex-start"
					justifyContent="baseline"
					spacing={3}>
					{items.map((project) => (
						<Grid2
							item
							xs={12}
							sm={6}
							md={4}
							key={project.title}
							sx={{ alignItems: "center", justifyContent: "center" }}>
							<MainCard
								imageURL={project.imageURL}
								title={project.title}
								description={project.description}
								url={project.url}
							/>
						</Grid2>
					))}
				</Grid2>
			</AccordionDetails>
		</Accordion>
	);
};

export default MainAccordion;
