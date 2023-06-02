import React from 'react';
import {
	ReactData,
	AngularData,
	GoData,
	JavaData,
	WebsitesData,
	VueData,
} from 'data/Data';
import MainAccordion from 'components/main-accordion/MainAccordion';

const Projects = () => {
	return (
		<>
			<MainAccordion items={AngularData} title='Angular' />
			<MainAccordion items={ReactData} title='React' />
			<MainAccordion items={VueData} title='Vue' />
			<MainAccordion items={GoData} title='Golang' />
			<MainAccordion items={JavaData} title='Java' />
			<MainAccordion items={WebsitesData} title='HTML' />
		</>
	);
};

export default Projects;
