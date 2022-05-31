import React from 'react';
import { FreeCodeCampData, JavaData, WebsitesData, VueData } from 'data/Data';
import MainAccordion from 'components/main-accordion/MainAccordion';

const Projects = () => {
	return (
		<>
			<MainAccordion items={FreeCodeCampData} title='Free Code Camp' />
			<MainAccordion items={JavaData} title='Java' />
			<MainAccordion items={WebsitesData} title='Websites' />
			<MainAccordion items={VueData} title='Vue' />
		</>
	);
};

export default Projects;
