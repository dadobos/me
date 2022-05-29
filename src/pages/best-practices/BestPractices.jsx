import React from 'react';
import { CSSData } from 'data/Data';
import MainAccordion from 'components/main-accordion/MainAccordion';

const BestPractices = () => {
	return (
		<>
			<MainAccordion items={CSSData} title='CSS Only' />
		</>
	);
};

export default BestPractices;
