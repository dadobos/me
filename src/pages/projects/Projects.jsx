import React from "react";
import { Box } from "@mui/material";
import {
	// AngularData,
	ReactData,
	WebsitesData,
	VueData,
	GoData,
	JavaData,
} from "data/Data";
import MainAccordion from "components/main-accordion/MainAccordion";

const Projects = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				width: "100%", // added so children can take full width
				alignItems: "stretch", // optional, ensures flex children stretch
			}}>
			<MainAccordion items={ReactData} title="React" />
			<MainAccordion items={WebsitesData} title="HTML" />
			<MainAccordion items={VueData} title="Vue" />
			<MainAccordion items={GoData} title="Golang" />
			<MainAccordion items={JavaData} title="Java" />
		</Box>
	);
};

export default Projects;
