import React from 'react';
import { ReactData,GoData, JavaData, WebsitesData, VueData } from 'data/Data';
import MainAccordion from 'components/main-accordion/MainAccordion';

const Projects = () => {
	return (
		<>
			<MainAccordion items={GoData} title='Golang' />
			<MainAccordion items={ReactData} title='React' />
			<MainAccordion items={VueData} title='Vue' />
			<MainAccordion items={WebsitesData} title='HTML' />
			<MainAccordion items={JavaData} title='Java' />
		</>
	);
};

export default Projects;
